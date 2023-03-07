import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form';

// Basic types

export type basicInputType = {
  label: string;
  inputType: string;
  reactKey: string;
  className?: string;
  required?: boolean | string;
};

export type hookFormsTypes = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

/* New Types */

/* Input Types */

export type maskedAndValidatedInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
}


export type integerAndDoubleFloatType = basicInputType & {
  scale: number;
}

export type stringEInscricaoEstadualInputType = basicInputType & {
  maxLength?: number;
}


export type urlInputType = basicInputType & 
{
  regex: RegExp,
  message: 'Url inválido!'
}

export type textareaType = basicInputType & {
  rows: number;
  cols: number;
}

/* Inputs Props */

export type IntegerInputProps = {
  input: integerAndDoubleFloatType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type DoubleFloatProps = {
  input: integerAndDoubleFloatType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type StringInputProps = {
  input: stringEInscricaoEstadualInputType;
} & hookFormsTypes;

export type DateInputProps = {
  input: maskedAndValidatedInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type DateRangeInputProps = {
  input: maskedAndValidatedInputType;
  controllerHooksForm: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
} & hookFormsTypes;

export type TimeInputProps = {
  input: maskedAndValidatedInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type BooleanInputProps = {
  input: basicInputType;
} & hookFormsTypes;

export type EmailInputProps = {
  input: maskedAndValidatedInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type UrlInputProps = {
  input: urlInputType;
} & hookFormsTypes;

export type CpfECnpjInputProps = {
  input: maskedAndValidatedInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type InscricaoEstualProps = {
  input: stringEInscricaoEstadualInputType;
} & hookFormsTypes;

export type TextareaProps = {
  input: textareaType,
} & hookFormsTypes;

// the render inputs props

export type configInputsToRenderType = {
  label: string;
  inputType: string;
  required?: string | booean;
  className?: string;
}

export type RenderInputsProps = {
  inputsList:  configInputsToRenderType[];
  controllerHooksForm: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
} & hookFormsTypes;

