import { useForm } from 'react-hook-form';
import { InputsProps, basicInputType } from '../Types';
import Integer from './Integer/Integer';
import Decimal from './Decimal/Decimal';
import { reactKeys } from '../InputsGeneratorConfig';
import String from './String/String';
import DateInput from './Date/DateInput';
import TimeInput from './Time/TimeInput';
import BooleanInput from './Boolean/BooleanInput';
import BasicInput from './BasicInput/BasicInput';

export default function RenderInputs(props: InputsProps) {
  const { inputsList } = props;
  const {
    register,
    formState: { errors },
    control,
  } = useForm();

  const renderIntegerInput = (input: basicInputType, key: string) => {
    return <Integer {...input} key={key} />;
  };

  const renderDecimalInput = (input: basicInputType, key: string) => {
    return <Decimal {...input} key={key} />;
  };

  const renderStringInput = (input: basicInputType, key: string) => {
    return <String {...input} key={key} />;
  };

  const renderDateInput = (input: basicInputType, key: string) => {
    return <DateInput {...input} key={key} />;
  };

  const renderTimeInput = (input: basicInputType, key: string) => {
    return <TimeInput {...input} key={key} />;
  };

  const renderBooleanInput = (input: basicInputType, key: string) => {
    return <BooleanInput {...input} key={key} />
  };

  const basicInput = (input: basicInputType, key: string) => {
    return <BasicInput {...input} key={key} />;
  };

  const renderAllInputs = () => {
    return inputsList.map((input, i) => {
      const actualReactKey = reactKeys[i];

      if(input.inputType === 'boolean')
      {
        return renderBooleanInput(input, actualReactKey)
      }

      if(input.mask) return;

      return basicInput(input, actualReactKey)
    });
  };

  return renderAllInputs();
}
