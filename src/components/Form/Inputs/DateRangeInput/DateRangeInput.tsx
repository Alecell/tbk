import { DateRangeInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function DateRangeInput(props: DateRangeInputProps) {
  const { controllerHooksForm } = props;

  const { label, mask, message, className, uuid, required } = props.input;

  let classCss = 'input ';
  classCss += className ? className : label;
  classCss += required ? ' required' : '';

  const convertStringToNumber = (value: string) => {
    const dateStringWithoutBars = value?.split('/').reverse().join('');

    return parseInt(dateStringWithoutBars);
  };

  return (
    <div className={classCss} key={uuid}>
      <label>{label}:</label>
      <div className="input-error_message--container">
        <Controller
          control={controllerHooksForm}
          name={className || ''}
          render={({ field }) => (
            <div className="input-date-range--container">
              <IMaskInput
                mask={mask}
                inputRef={(ref) => {
                  field.ref(ref);
                }}
                onAccept={(value, mask) =>
                  field.onChange({ ...field.value, value1: value })
                }
              />
              <span>a</span>
              <IMaskInput
                mask={mask}
                inputRef={(ref) => {
                  field.ref(ref);
                }}
                onAccept={(value, mask) =>
                  field.onChange({ ...field.value, value2: value })
                }
              />
            </div>
          )}
          rules={{
            validate: () => {
              const date1 = convertStringToNumber(
                props.getValues('dateRange')?.value1
              );
              const date2 = convertStringToNumber(
                props.getValues('dateRange')?.value2
              );
              if (!date1 && !date2) return;
              return date2 >= date1 || message;
            },
          }}
        />

        {props.errors?.dateRange && (
          <span>{`${props.errors?.dateRange?.message}`}</span>
        )}
      </div>
    </div>
  );
}
