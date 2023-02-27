import { maskedInputType } from 'components/Form/Types';
import { IMaskInput } from 'react-imask';

export default function MaskedInput(props: maskedInputType, key: string) {
  let className = 'input ';
  className += props.className ? props.className : props.label;

  return (
    <div className={className} key={key}>
      <label>{props.label}:</label>
      <IMaskInput 
        mask={props.mask}
      />
    </div>
  );
}
