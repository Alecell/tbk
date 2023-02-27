import { basicInputType } from 'components/Form/Types';

export default function TimeInput(props: basicInputType, key: string) {
  let className = 'input ';
  className += props.className ? props.className : props.label;

  return (
    <div className={className} key={key}>
      <label>{props.label}:</label>
      <input type="time" step={props.step} />
    </div>
  );
}
