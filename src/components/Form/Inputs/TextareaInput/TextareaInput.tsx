import { TextareaProps } from 'components/Form/Types';

export default function TextareaInput(props: TextareaProps) {
  const { label, className, rows, cols } = props.input;

  let cssClass = 'input Text';
  cssClass += className ? className : '';

  return (
    <div className={cssClass}>
      <label>{label}:</label>
      <textarea
        rows={rows}
        cols={cols}
        {...props.register(label)}
      />
    </div>
  );
}
