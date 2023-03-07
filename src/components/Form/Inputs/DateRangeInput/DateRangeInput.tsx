import { DateRangeInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function DateRangeInput(props: DateRangeInputProps) {
  const { controllerHooksForm, errors } = props;

  const { label, mask, message, className, required } = props.input;

  let cssClass = 'input DateRange ';
  cssClass += className ? className : '';
  cssClass += required ? ' required' : '';

  const convertStringToNumber = (value: string) => {
    const dateStringWithoutBars = value?.split('/').reverse().join('');

    return parseInt(dateStringWithoutBars);
  };

  return (
    <div className={cssClass}>
      <label>{label}</label>
      <div className="input-error_message--container">
        <Controller
          control={controllerHooksForm}
          name={'dateRange'}
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
              console.log(date1, date2)
              return date2 >= date1 || message;
            },
          }}
        />

        {errors?.dateRange && (
          <span>{`${errors?.dateRange?.message}`}</span>
        )}
      </div>
    </div>
  );
}
