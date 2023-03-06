import './RenderInputs.scss';
import './MediaQueriesInputs.scss';

import { RenderInputsProps } from '../Types';
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
import { urlInputType } from '../Types';

export default function RenderInputs(props: RenderInputsProps) {
  const { inputsList, register, errors, controllerHooksForm, getValues } =
    props;

    function determineUrl(toBeDetermined: urlInputType): toBeDetermined is urlInputType {
      if((toBeDetermined as urlInputType).type)
      {
        return true;
      }
      return false;
    }

  const renderAllInputs = () => {
    return inputsList.map((input) => {
      if ('scale' in input && input.inputType === 'Integer') {
        return (
          <IntegerInput
            input={input}
            controllerHooksForm={controllerHooksForm}
            register={register}
            errors={errors}
          />
        );
      }

      if ('scale' in input && input.inputType === 'Double/Float') {
        return (
          <DoubleFloatInput
            input={input}
            key={input.reactKey}
            controllerHooksForm={controllerHooksForm}
            register={register}
            errors={errors}
          />
        );
      }

      if ('maxLength' in input && input.inputType === 'String') {
        return (
          <StringInput
            input={input}
            key={input.reactKey}
            register={register}
            errors={errors}
          />
        );
      }

      if ('mask' in input && 'regex' in input && input.inputType === 'Date') {
        return (
          <DateInput
            input={input}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if ('mask' in input && 'regex' in input && input.inputType === 'DateRange') {
        return (
          <DateRangeInput
            input={input}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
            getValues={getValues}
          />
        );
      }

      if ('mask' in input && 'regex' in input && input.inputType === 'MonthYear') {
        return (
          <DateInput
            input={input}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if ('mask' in input && 'regex' in input && input.inputType === 'Time') {
        return (
          <TimeInput
            input={input}
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

      if ('mask' in input && 'regex' in input && input.inputType === 'Email') {
        return (
          <EmailInput
            input={input}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if ('mask' in input && 'regex' in input && input.inputType === 'CPF') {
        return (
          <CpfInput
            input={input}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if ('mask' in input && 'regex' in input && input.inputType === 'CNPJ') {
        return (
          <CnpjInput
            input={input}
            register={register}
            errors={errors}
            controllerHooksForm={controllerHooksForm}
          />
        );
      }

      if (input.inputType === 'InscricaoEstadual') {
        return (
          <InscricaoEstadualInput
            input={input}
            register={register}
            errors={errors}
          />
        );
      }

      if ('rows' in input && input.inputType === 'textarea') {
        return (
          <TextareaInput input={input} register={register} errors={errors} />
        );
      }

      if (input.type) {
        return <UrlInput input={input} register={register} errors={errors} />;
      }
    });
  };

  return <>{renderAllInputs()}</>;
}
