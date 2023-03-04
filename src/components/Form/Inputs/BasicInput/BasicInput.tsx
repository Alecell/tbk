import { BasicInputProps } from 'components/Form/Types';

export default function BasicInput(props: BasicInputProps) {
  const { label, inputType, className, maxLength, uuid, required } =
    props.input;

  let cssClass = 'input ';
  cssClass += className ? className : inputType;
  cssClass += required ? ' required' : '';

  return (
    <div className={cssClass} key={uuid}>
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
  );
}
