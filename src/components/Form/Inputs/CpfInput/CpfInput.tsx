import { CpfECnpjInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function CpfInput(props: CpfECnpjInputProps) {

  const { controllerHooksForm, errors } = props;
  const { label, mask, message, regex, className, required } = props.input;

  let cssClass = 'input CPF ';
  cssClass += className ? className : '';
  cssClass += required ? ' required' : '';


  return (
    <div className={cssClass}>
      <label>{label}</label>
      <div className="input-error_message--container">
        <Controller
          control={controllerHooksForm}
          name={label}
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <IMaskInput
              mask={mask}
              onAccept={(value, mask) => onChange(value)}
            />
          )}
          rules={{
            pattern: {
              value: regex,
              message: message,
            },
            required: required,
          }}
        />
        {errors[label] && (
          <span>{`${errors[label]?.message}`}</span>
        )}
      </div>
    </div>
  );
}
