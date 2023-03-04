import { VerifiedInputProps } from 'components/Form/Types';

export default function InputWithValidation(props: VerifiedInputProps) {
  const { label, inputType, className, regex, message, uuid, required } = props.input;

  let cssClass = 'input ';
  cssClass += className ? className : inputType;
  cssClass += required ? ' required' : '';

  return (
    <div className={cssClass} key={uuid}>
      <label>{label}:</label>
      <div className="input-error_message--container">
        <input
          type={inputType}
          {...props.register(label, {
            pattern: {
              value: regex,
              message: message,
            },
          })}
        />
        {props.errors[label] && <span>{message}</span>}
      </div>
    </div>
  );
}
