import { BasicInputProps } from 'components/Form/Types';

export default function Textarea(props: BasicInputProps) {
  const { label, inputType, className, rows, cols } = props.input;

  let cssClass = 'input ';
  cssClass += className ? className : label;

  return (
    <div className={cssClass} key={props.key}>
      <label>{label}:</label>
      <textarea
        rows={rows}
        cols={cols}
        {...props.register(label)}
      />
    </div>
  );
}
