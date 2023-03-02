import './RenderInputs.css';
import './MediaQueriesInputs.css';
import Textarea from './Textarea/Textarea';
import { verifiedInputType } from '../Types';
import BasicInput from './BasicInput/BasicInput';
import BooleanInput from './Boolean/BooleanInput';
import MaskedInput from './MaskedInput/MaskedInput';
import DateRangeInput from './DateRangeInput/DateRangeInput';
import InputWithValidation from './InputWithValidation/InputWithValidation';
import { RenderInputsProps, basicInputType, maskedInputType } from '../Types';

export default function RenderInputs(props: RenderInputsProps) {
  const { inputsList, register, errors, controllerHooksForm, getValues } =
    props;

  const renderBooleanInput = (input: basicInputType) => {
    return (
      <BooleanInput
        input={input}
        register={register}
        errors={errors}
        key={input.uuid}
      />
    );
  };

  const basicInput = (input: basicInputType) => {
    return (
      <BasicInput
        input={input}
        register={register}
        errors={errors}
        key={input.uuid}
      />
    );
  };

  const renderMaskedInput = (input: maskedInputType) => {
    return (
      <MaskedInput
        input={input}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.uuid}
      />
    );
  };

  const renderTextareaInput = (input: basicInputType) => {
    return (
      <Textarea
        input={input}
        register={register}
        errors={errors}
        key={input.uuid}
      />
    );
  };

  const renderInputWithValidation = (input: verifiedInputType) => {
    return (
      <InputWithValidation
        input={input}
        register={register}
        errors={errors}
        key={input.uuid}
      />
    );
  };

  const renderDateRangeInput = (input: maskedInputType) => {
    return (
      <DateRangeInput
        input={input}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        getValues={getValues}
        key={input.uuid}
      />
    );
  };

  const renderAllInputs = () => {
    return inputsList.map((input) => {
      if (input.inputType === 'boolean') {
        return renderBooleanInput(input);
      }

      if ('mask' in input && input.inputType === 'dateRange') {
        return renderDateRangeInput(input);
      }

      if ('mask' in input) {
        return renderMaskedInput(input);
      }

      if ('regex' in input) {
        return renderInputWithValidation(input);
      }

      if (input.inputType === 'textarea') {
        return renderTextareaInput(input);
      }

      return basicInput(input);
    });
  };

  return <>{renderAllInputs()}</>;
}
