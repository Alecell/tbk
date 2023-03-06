import { StringInputProps } from 'components/Form/Types';

export default function StringInput(props: StringInputProps) {

  const { label, inputType, className, maxLength, required } = props.input;

  let cssClass = 'input String';

  return (
    <div className={cssClass}>
      <label>{label}:</label>
      <div className='input-error_message--container'>
        <input
          type={inputType}
          maxLength={maxLength}
          {...props.register(label, {
            required: required,
          })}
        />
        {props.errors[label] && (
          <span>{`${props.errors[label]?.message}`}</span>
        )}
      </div>
    </div>
  )
}
