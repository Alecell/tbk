import { MaskedInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function MaskedInput(props: MaskedInputProps) {
  const { controllerHooksForm } = props;

  const { label, inputType, mask, message, regex, className } = props.input;

  let classCss = 'input ';
  classCss += className ? className : label;

  return (
    <div className={classCss} key={props.key}>
      <label>{label}:</label>
      <Controller
        control={controllerHooksForm}
        name={label}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => <IMaskInput mask={mask} ref={ref} onAccept={(value, mask) => onChange(value)} />}
        rules={{pattern: {
          value: regex,
          message: message
        }}}
      />
      {props.errors[label] && <p>erro!</p>}
    </div>
  );
}
