import { RenderInputsProps, basicInputType, maskedInputType } from '../Types';
import BooleanInput from './Boolean/BooleanInput';
import BasicInput from './BasicInput/BasicInput';
import MaskedInput from './MaskedInput/MaskedInput';
import Textarea from './Textarea/Textarea';
import './RenderInputs.css';
import { verifiedInputType } from '../Types';
import InputWithValidation from './InputWithValidation/InputWithValidation';

export default function RenderInputs(props: RenderInputsProps) {
  const { inputsList, register, errors, controllerHooksForm } = props;

  const renderBooleanInput = (input: basicInputType) => {
    return (
      <BooleanInput
        input={input}
        register={register}
        errors={errors}
      />
    );
  };

  const basicInput = (input: basicInputType) => {
    return (
      <BasicInput input={input} register={register} errors={errors} />
    );
  };

  const renderMaskedInput = (input: maskedInputType) => {
    return (
      <MaskedInput
        input={input}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
      />
    );
  };

  const renderTextareaInput = (input: basicInputType) => {
    return (
      <Textarea input={input} register={register} errors={errors} />
    );
  };

  const renderInputWithValidation = (input: verifiedInputType) =>
  {
    return <InputWithValidation input={input} register={register} errors={errors} />
  }

  const renderAllInputs = () => {
    return inputsList.map((input) => {

      if (input.inputType === 'boolean') {
        return renderBooleanInput(input);
      }

      if ('mask' in input) {
        return renderMaskedInput(input);
      }

      if('regex' in input) {
        return renderInputWithValidation(input)
      }      

      if (input.inputType === 'textarea') {
        return renderTextareaInput(input);
      }

      return basicInput(input);
    });
  };

  return <>{renderAllInputs()}</>;
}
