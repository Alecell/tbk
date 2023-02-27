import { useForm } from 'react-hook-form';
import { InputsProps, basicInputType } from '../Types';
import BooleanInput from './Boolean/BooleanInput';
import BasicInput from './BasicInput/BasicInput';
import { reactKeys } from '../InputsGeneratorConfig';

export default function RenderInputs(props: InputsProps) {
  const { inputsList } = props;
  const {
    register,
    formState: { errors },
    control,
  } = useForm();

  const renderBooleanInput = (input: basicInputType, key: string) => {
    return (<BooleanInput {...input} key={key} />);
  };

  const basicInput = (input: basicInputType, key: string) => {
    return (<BasicInput {...input} key={key} />);
  };

  const renderMaskedInput = (input: basicInputType, key: string) =>
  {
    
  }

  const renderAllInputs = () => {
    return inputsList.map((input, i) => {

      const actualReactKey = reactKeys[i];

      if(input.inputType === 'boolean')
      {
        return renderBooleanInput(input, actualReactKey)
      }

      if('mask' in input)
      {
        return renderMaskedInput(input, actualReactKey);
      }

      return basicInput(input, actualReactKey)
    });
  };

  return <>{renderAllInputs()}</>;
}
