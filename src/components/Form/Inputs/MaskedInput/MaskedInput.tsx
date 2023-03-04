import { MaskedInputProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function MaskedInput(props: MaskedInputProps) {
  const { controllerHooksForm } = props;

  const { label, mask, message, regex, className, scale, uuid, required, inputType } = props.input;

  let cssClass = 'input ';
  cssClass += className ? className : inputType;
  cssClass += required ? ' required' : '';

  return (
    <div className={cssClass} key={uuid}>
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
              onAccept={(value, mask) => onChange(value)}
              scale={scale}
            />
          )}
          rules={{
            pattern: {
              value: regex,
              message: message,
            },
            required: required
          }}
        />
        {props.errors[label] && <span>{`${props.errors[label]?.message}`}</span>}
      </div>
    </div>
  );
}
