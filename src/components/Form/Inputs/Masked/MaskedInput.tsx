import { maskedInputType } from 'components/Form/Types';
import { IMaskInput } from 'react-imask';

export default function MaskedInput(props: maskedInputType, key: string) {
  let className = 'input ';
  className += props.className ? props.className : props.label;

  return (
    <IMaskInput 
        mask={props.mask}
    />
  );
}
