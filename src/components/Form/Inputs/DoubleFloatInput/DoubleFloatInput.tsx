import { DoubleFloatProps } from 'components/Form/Types';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

export default function DoubleFloatInput(props: DoubleFloatProps) {
  const { controllerHooksForm, errors } = props;
  const { label, className, mask, required, scale } =
    props.input;

  let cssClass = 'input doubleFloat ';
  cssClass += className;

  return (
    <div className={cssClass}>
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
            required: required
          }}
        />
        {errors[label] && (
          <span>{`${errors[label]?.message}`}</span>
        )}
      </div>
    </div>
  );
}
