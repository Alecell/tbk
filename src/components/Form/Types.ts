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

type integerInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  scale: number;
  message: string;
}

type doubleFloatType = basicInputType & {
  mask: string;
  scale: number;
}

type stringInputType = basicInputType & {
  maxLength: number;
}

type dateInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
}

type dateRangeInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
}

type timeInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
}

type emailInputType = basicInputType & 
{
  mask: string;
  regex: RegExp;
  message: string;
}

type urlInputType = basicInputType & 
{
  regex: RegExp,
  message: 'Url inválido!'
}

type cpfECnpjType = basicInputType & 
{
  mask: string;
  regex: RegExp;
  message: string;
}

type inscricaoEstualType = basicInputType &
{
  maxLength?: number;
}

type TextareaType = basicInputType & {
  rows: number;
  cols: number;
}

/* Inputs Props */

export type IntegerInputProps = {
  input: integerInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type DoubleFloatProps = {
  input: doubleFloatType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type StringInputProps = {
  input: stringInputType;
} & hookFormsTypes;

export type DateInputProps = {
  input: dateInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type DateRangeInputProps = {
  input: dateRangeInputType;
  controllerHooksForm: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
} & hookFormsTypes;

export type TimeInputProps = {
  input: timeInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type EmailInputProps = {
  input: emailInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type UrlInputProps = {
  input: urlInputType;
} & hookFormsTypes;

export type CpfECnpjInputProps = {
  input: cpfECnpjType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type InscricaoEstualProps = {
  input: inscricaoEstualType;
} & hookFormsTypes;

export type TextareaProps = {
  input: TextareaType,
} & hookFormsTypes;


// the render inputs props
export type RenderInputsProps = hookFormsTypes & {
  inputsList: integerInputType[] | doubleFloatType[] | stringInputType[];
  controllerHooksForm: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
};
