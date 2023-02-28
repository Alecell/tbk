import { BasicInputProps } from 'components/Form/Types';
import './BooleanInput.css';

export default function BooleanInput(props: BasicInputProps) {
  const { label, className } = props.input;

  let classCss = 'input ';
  classCss += className ? className : label;

  return (
    <div className={classCss} key={props.key}>
      <label>Boolean:</label>
      <label htmlFor={label} className="switch">
        <input id={label} type="checkbox" {...props.register(label)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
