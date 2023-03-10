import { IMaskInput } from 'react-imask';
import { Controller } from 'react-hook-form';
import { IntegerInputProps } from 'components/Form/Types';

export default function IntegerInput(props: IntegerInputProps) {
  const { controllerHooksForm, errors } = props;
  const { label, className, required } =
    props.input;

  let cssClass = 'input Integer ';
  cssClass += className ? className : '';
  cssClass += required ? ' required' : '';

  return (
    <div className={cssClass}>
      <label>{label}</label>
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
              mask={Number}
              onAccept={(value, mask) => onChange(value)}
            />
          )}
          rules={{
            required: required,
          }}
        />
        {errors[label] && (
          <span>{`${errors[label]?.message}`}</span>
        )}
      </div>
    </div>
  );
}
