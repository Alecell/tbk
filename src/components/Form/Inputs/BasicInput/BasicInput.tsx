import { BasicInputProps } from 'components/Form/Types';

export default function BasicInput(props: BasicInputProps) {
  const { label, inputType, className, maxLength, uuid } = props.input;

  let cssClass = 'input ';
  cssClass += className ? className : label;

  return (
    <div className={cssClass} key={uuid}>
      <label>{label}:</label>
      <input
        type={inputType}
        maxLength={maxLength}
        {...props.register(label)}
      />
    </div>
  );
}
