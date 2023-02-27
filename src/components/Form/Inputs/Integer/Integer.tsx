import { basicInputType } from 'components/Form/Types'
import React from 'react'

export default function Integer(props: basicInputType, key: string) {
  
  let className = 'input ';
  className+= props.className ? props.className : props.label

  return (
    <div className={className} key={key}>
        <label>{props.label}:</label>
        <input type="number" />
    </div>
  )
}
