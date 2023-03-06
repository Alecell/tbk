import { EmailInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function EmailInput(props: EmailInputProps) {
  
  const { controllerHooksForm, errors, register } = props;
  const { label, inputType, regex, message, className, required} = props.input;
  
  let cssClass = 'input Email ';
  cssClass += className;

  return (
    <div className={cssClass}>
      <label>{label}:</label>
      <div className="input-error_message--container">
        <input
          type={inputType}
          {...props.register(label, {
            pattern: {
              value: regex,
              message: message,
            },
            required: required
          })}
        />
        {errors[label] && <span>{`${errors[label]?.message}`}</span>}
      </div>
    </div>
  );
}
