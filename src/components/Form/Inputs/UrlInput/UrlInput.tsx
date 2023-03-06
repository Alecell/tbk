import { UrlInputProps } from 'components/Form/Types';
import React from 'react'

export default function UrlInput(props: UrlInputProps) {

  const { register, errors } = props;
  const { label, inputType, className, regex, message, required } = props.input;

  let cssClass = 'input Url ';
  cssClass += className ? className : '';
  cssClass += required ? ' required' : '';

  return (
    <div className={cssClass}>
      <label>{label}:</label>
      <div className='input-error_message--container'>
        <input
          type={inputType}
          {...register(label, {
            pattern: {
              value: regex,
              message: message
            },
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
