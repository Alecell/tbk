import { BasicInputProps } from 'components/Form/Types';

export default function BasicInput(props: BasicInputProps) {
  const { label, inputType, className, maxLength } = props.input;

  let cssClass = 'input ';
  cssClass += className ? className : label;

  return (
    <div className={cssClass} key={props.key}>
      <label>{label}:</label>
      <input
        type={inputType}
        maxLength={maxLength}
        {...props.register(label)}
      />
    </div>
  );
}
