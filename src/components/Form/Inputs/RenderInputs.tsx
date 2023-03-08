//import './RenderInputs.scss';
import './MediaQueriesInputs.scss';
import { styles } from './RenderInputs.style';
import {
  inputsGeneratedReactType,
  integerAndDoubleFloatType,
  maskedAndValidatedInputType,
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

  const inputsGeneratedReact: inputsGeneratedReactType = {
    Integer: (input) => (
      <IntegerInput
        input={input as integerAndDoubleFloatType}
        controllerHooksForm={controllerHooksForm}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    DoubleFloat: (input) => (
      <DoubleFloatInput
        input={input as integerAndDoubleFloatType}
        key={input.reactKey}
        controllerHooksForm={controllerHooksForm}
        register={register}
        errors={errors}
      />
    ),
    String: (input) => (
      <StringInput
        input={input as stringEInscricaoEstadualInputType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    Date: (input) => (
      <DateInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    DateRange: (input) => (
      <DateRangeInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        getValues={getValues}
        key={input.reactKey}
      />
    ),
    MonthYear: (input) => (
      <DateInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    Time: (input) => (
      <TimeInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    Boolean: (input) => (
      <BooleanInput
        input={input}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    Email: (input) => (
      <EmailInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    CPF: (input) => (
      <CpfInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    CNPJ: (input) => (
      <CnpjInput
        input={input as maskedAndValidatedInputType}
        register={register}
        errors={errors}
        controllerHooksForm={controllerHooksForm}
        key={input.reactKey}
      />
    ),
    InscricaoEstadual: (input) => (
      <InscricaoEstadualInput
        input={input as stringEInscricaoEstadualInputType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    textarea: (input) => (
      <TextareaInput
        input={input as textareaType}
        register={register}
        errors={errors}
        key={input.reactKey}
      />
    ),
    Url: (input) => (
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

  return <div css={styles}>{renderAllInputs()}</div>;
}
