import { basicInputType } from 'components/Form/Types';

export default function BasicInput(props: basicInputType, key: string) {
  let className = 'input ';
  className += props.className ? props.className : props.label;

  return (
    <div className={className} key={key}>
      <label>{props.label}:</label>
      <input
        type={props.inputType}
        step={props.step}
        maxLength={props.maxLength}
      />
    </div>
  );
}
