import './RenderInputs.scss';
import './MediaQueriesInputs.scss';

import { integerAndDoubleFloatType, maskedAndValidatedInputType, RenderInputsProps, stringEInscricaoEstadualInputType, textareaType, urlInputType } from '../Types';
import IntegerInput from './IntegerInput/IntegerInput';
import DoubleFloatInput from './DoubleFloatInput/DoubleFloatInput';
import StringInput from './StringInput/StringInput';
import DateInput from './DateInput/DateInput';
import DateRangeInput from './DateRangeInput/DateRangeInput';
import TimeInput from './TimeInput/TimeInput';
import BooleanInput from './Boolean/BooleanInput';
import EmailInput from './EmailInput/EmailInput';
import CpfInput from './CpfInput/CpfInput';
import CnpjInput from './CnpjInput/CnpjInput';
import TextareaInput from './TextareaInput/TextareaInput';
import InscricaoEstadualInput from './InscricaoEstadualInput/InscricaoEstadualInput';
import UrlInput from './UrlInput/UrlInput';

export default function RenderInputs(props: RenderInputsProps) {
  const { inputsList, register, errors, controllerHooksForm, getValues } =
    props;

  const renderAllInputs = () => {
    return inputsList.map((input) => {
      if (input.inputType === 'Integer') {
        return (
          <IntegerInput
            input={input as integerAndDoubleFloatType}
            controllerHooksForm={controllerHooksForm}
            register={register}
            errors={errors}
          />
        );
      }

      if (input.inputType === 'Double/Float') {
        return (
          <DoubleFloatInput
            input={input as integerAndDoubleFloatType}
            key={input.reactKey}
            controllerHooksForm={controllerHooksForm}
            register={register}
            errors={errors}
          />
        );
      }

      if (input.inputType === 'String') {
        return (
          <StringInput
            input={input as stringEInscricaoEstadualInputType}
            key={input.reactKey}
            register={register}
            errors={errors}
          />
        );
      }

      if (input.inputType === 'Date') {
        return (
          <DateInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'DateRange') {
        return (
          <DateRangeInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
            getValues={getValues}
          />
        );
      }

      if (input.inputType === 'MonthYear') {
        return (
          <DateInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'Time') {
        return (
          <TimeInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'Boolean') {
        return (
          <BooleanInput
            input={input}
            key={input.reactKey}
            register={register}
            errors={errors}
          />
        );
      }

      if (input.inputType === 'Email') {
        return (
          <EmailInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'CPF') {
        return (
          <CpfInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'CNPJ') {
        return (
          <CnpjInput
            input={input as maskedAndValidatedInputType}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'InscricaoEstadual') {
        return (
          <InscricaoEstadualInput
            input={input as stringEInscricaoEstadualInputType}
            register={register}
            errors={errors}
          />
        );
      }

      if (input.inputType === 'textarea') {
        return (
          <TextareaInput input={input as textareaType} register={register} errors={errors} />
        );
      }

      if (input.inputType === 'Url') {
        return <UrlInput input={input as urlInputType} register={register} errors={errors} />;
      }
    });
  };

  return <>{renderAllInputs()}</>;
}
