import { VerifiedInputProps } from 'components/Form/Types';

export default function InputWithValidation(props: VerifiedInputProps) {
  const { label, inputType, className, regex, message } = props.input;

  let cssClass = 'input ';
  cssClass += className ? className : label;

  return (
    <div className={cssClass} key={props.key}>
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
