import { DateRangeInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function DateRangeInput(props: DateRangeInputProps) {
  const { controllerHooksForm } = props;

  const { label, mask, message, regex, className, uuid } = props.input;

  let classCss = 'input ';
  classCss += className ? className : label;

  const convertStringToNumber = (value: string) => {
    const dateStringWithoutBars = value.split('/').join('');
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
            <div className='input-date-range--container'>
              <IMaskInput
                mask={mask}
                // ref={field.ref}
                value={field.value?.value1}
                onAccept={(value, mask) =>
                  field.onChange({ ...field.value, value1: value })
                }
              /> 
              <span>-</span>
              <IMaskInput
                mask={mask}
                // ref={field.ref}
                value={field.value?.value2}
                onAccept={(value, mask) =>
                  field.onChange({ ...field.value, value2: value })
                }
              />
            </div>
          )}
          rules={{
            validate: async () => {
              const date1 = convertStringToNumber(
                await props.getValues('dateRange').value1
              );
              const date2 = convertStringToNumber(
                await props.getValues('dateRange').value2
              );
  
              return date2 >= date1 || 'erro!'
            },
          }}
        />
        
        {props.errors?.dateRange && <span>{message}</span>}
      </div>
    </div>
  );
}
