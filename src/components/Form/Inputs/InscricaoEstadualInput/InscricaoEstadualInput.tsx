import { InscricaoEstualProps } from "components/Form/Types";

export default function InscricaoEstadualInput(props: InscricaoEstualProps) {
  
  const { register, errors } = props;
  const { label, inputType, className, maxLength, required } = props.input;

  let cssClass = 'input inscricaoEstadual ';
  cssClass += className;

  return (
    <div className={cssClass}>
      <label>{label}:</label>
      <div className='input-error_message--container'>
        <input
          type={inputType}
          maxLength={maxLength}
          {...register(label, {
            required: required,
          })}
        />
        {errors[label] && (
          <span>{`${errors[label]?.message}`}</span>
        )}
      </div>
    </div>
  )
}
