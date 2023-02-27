import { InputProps, basicInputType, maskedInputType } from '../Types';
import BooleanInput from './Boolean/BooleanInput';
import BasicInput from './BasicInput/BasicInput';
import { reactKeys } from '../InputsGeneratorConfig';
import MaskedInput from './MaskedInput/MaskedInput';
import Textarea from './Textarea/Textarea';
import './RenderInputs.css';

export default function RenderInputs(props: InputProps) {
  const { inputsList, register, errors, controllerHooksForm } = props;

  const renderBooleanInput = (input: basicInputType, key: string) => {
    return (
      <BooleanInput
        input={input}
        key={key}
        register={register}
        errors={errors}
      />
    );
  };

  const basicInput = (input: basicInputType, key: string) => {
    return (
      <BasicInput input={input} key={key} register={register} errors={errors} />
    );
  };

  const renderMaskedInput = (input: maskedInputType, key: string) => {
    return (
      <MaskedInput
        input={input}
        key={key}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
      />
    );
  };

  const renderTextareaInput = (input: basicInputType, key: string) => {
    return (
      <Textarea input={input} key={key} register={register} errors={errors} />
    );
  };

  const renderAllInputs = () => {
    return inputsList.map((input, i) => {
      const actualReactKey = reactKeys[i];

      if (input.inputType === 'boolean') {
        return renderBooleanInput(input, actualReactKey);
      }

      if ('mask' in input) {
        return renderMaskedInput(input, actualReactKey);
      }

      if (input.inputType === 'textarea') {
        return renderTextareaInput(input, actualReactKey);
      }

      return basicInput(input, actualReactKey);
    });
  };

  return <>{renderAllInputs()}</>;
}
