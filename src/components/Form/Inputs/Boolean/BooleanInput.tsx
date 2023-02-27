import { BasicInputProps } from 'components/Form/Types';
import './BooleanInput.css';

export default function BooleanInput(props: BasicInputProps) {

  const { label, inputType, className, maxLength, step } = props.input;



  let classCss = 'input ';
  classCss += classCss ? classCss : label;

  return (
    <div className={className} key={props.key}>
      <label>Boolean:</label>
      <label htmlFor={label} className="switch">
        <input id={label} type="checkbox" {...props.register(label)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
