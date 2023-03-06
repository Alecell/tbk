import { BooleanInputProps } from 'components/Form/Types';
import './BooleanInput.scss';

export default function BooleanInput(props: BooleanInputProps) {
  const { label, className, required } = props.input;

  let cssClass = 'input Boolean ';
  cssClass += className ? className : '';
  cssClass += required ? ' required' : ''

  return (
    <div className={cssClass}>
      <label>Boolean:</label>
      <label htmlFor={label} className="switch">
        <input id={label} type="checkbox" {...props.register(label)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
