import { basicInputType } from 'components/Form/Types'
import './BooleanInput.css';

export default function BooleanInput(props: basicInputType, key: string) {
  
  let className = 'input ';
  className+= props.className ? props.className : props.label

  return (
    <div className={className} key={key}>
        <label>Boolean:</label>
        <label htmlFor={props.label} className='switch'>
            <input 
                id={props.label}
                type="checkbox" 
            />
            <span className='slider round'></span>
        </label>
    </div>
  )
}
