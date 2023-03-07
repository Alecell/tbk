import './RenderInputs.scss';
import './MediaQueriesInputs.scss';

import {
  basicInputType,
  inputsGeneratedReact,
  integerAndDoubleFloatType,
  maskedAndValidatedInputType,
  preFormatedInputsType,
  RenderInputsProps,
  stringEInscricaoEstadualInputType,
  textareaType,
  urlInputType,
} from '../Types';
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
import { preFormatedInputs } from '../InputsGeneratorConfig';

export default function RenderInputs(props: RenderInputsProps) {
  const { inputsList, register, errors, controllerHooksForm, getValues } =
    props;

  const inputsGeneratedReact: inputsGeneratedReact = {
    Integer: (input: integerAndDoubleFloatType) => (
      <IntegerInput
        input={input as integerAndDoubleFloatType}
        controllerHooksForm={controllerHooksForm}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    DoubleFloat: (input: integerAndDoubleFloatType) => (
      <DoubleFloatInput
        input={input as integerAndDoubleFloatType}
        key={input.reactKey}
        controllerHooksForm={controllerHooksForm}
        register={register}
        errors={errors}
      />
    ),
    String: (input: stringEInscricaoEstadualInputType) => (
      <StringInput
        input={input as stringEInscricaoEstadualInputType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    Date: (input: maskedAndValidatedInputType) => (
      <DateInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    DateRange: (input: maskedAndValidatedInputType) => (
      <DateRangeInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        getValues={getValues}
        key={input.reactKey}
      />
    ),
    MonthYear: (input: maskedAndValidatedInputType) => (
      <DateInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    Time: (input: maskedAndValidatedInputType) => (
      <TimeInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    Boolean: (input: maskedAndValidatedInputType) => (
      <BooleanInput
        input={input}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    Email: (input: maskedAndValidatedInputType) => (
      <EmailInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    CPF: (input: maskedAndValidatedInputType) => (
      <CpfInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    CNPJ: (input: maskedAndValidatedInputType) => (
      <CnpjInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    InscricaoEstadual: (input: stringEInscricaoEstadualInputType) => (
      <InscricaoEstadualInput
        input={input as stringEInscricaoEstadualInputType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    textarea: (input: textareaType) => (
      <TextareaInput
        input={input as textareaType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    Url: (input: urlInputType) => (
      <UrlInput
        input={input as urlInputType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
  };

  const renderAllInputs = () => {
    return inputsList.map((input) => {
      const inputType = input.inputType;
      const preFormatedInput = preFormatedInputs[inputType];
      const newInput = { ...preFormatedInput, ...input };

      return inputsGeneratedReact[inputType](newInput);
    });
  };

  return <>{renderAllInputs()}</>;
}
