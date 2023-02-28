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
  uuid: string;
  required?: boolean | string;
  className?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
};

export type maskedInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
  scale?: number;
};

export type verifiedInputType = basicInputType &
  Omit<maskedInputType, 'mask'> &
  hookFormsTypes;

export type hookFormsTypes = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

// Props of inputs type

export type RenderInputsProps = hookFormsTypes & {
  inputsList: basicInputType[] | maskedInputType[] | verifiedInputType[];
  controllerHooksForm: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
};

export type BasicInputProps = {
  input: basicInputType;
} & hookFormsTypes;

export type MaskedInputProps = {
  input: maskedInputType;
  controllerHooksForm: Control<FieldValues, any>;
} & hookFormsTypes;

export type VerifiedInputProps = {
  input: verifiedInputType;
} & hookFormsTypes;

export type DateRangeInputProps = {
  input: maskedInputType;
  controllerHooksForm: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
} & hookFormsTypes;
