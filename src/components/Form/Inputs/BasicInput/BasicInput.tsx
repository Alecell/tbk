import { BasicInputProps } from 'components/Form/Types';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from 'react-hook-form';

export default function BasicInput(props: BasicInputProps
) {

  const { label, inputType, className, maxLength, step } = props.input;
  
  let cssClass = 'input ';
  cssClass += className ? className : label;

  return (
    <div className={cssClass} key={props.key}>
      <label>{label}:</label>
      <input
        type={inputType}
        step={step}
        maxLength={maxLength}
        {...props.register(label)}
      />
    </div>
  );
}
