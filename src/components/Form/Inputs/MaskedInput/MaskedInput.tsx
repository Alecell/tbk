import { MaskedInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function MaskedInput(props: MaskedInputProps) {
  const { controllerHooksForm } = props;

  const { label, mask, message, regex, className, scale, uuid } = props.input;

  let classCss = 'input ';
  classCss += className ? className : label;

  return (
    <div className={classCss} key={uuid}>
      <label>{label}:</label>
      <div className="input-error_message--container">
        <Controller
          control={controllerHooksForm}
          name={label}
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <IMaskInput
              mask={mask}
              ref={ref}
              onAccept={(value, mask) => onChange(value)}
              scale={scale}
            />
          )}
          rules={{
            pattern: {
              value: regex,
              message: message,
            },
          }}
        />
        {props.errors[label] && <span>{message}</span>}
      </div>
    </div>
  );
}
