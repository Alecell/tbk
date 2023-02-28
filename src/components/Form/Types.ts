import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

export type basicInputType = {
  label: string;
  inputType: string;
  className?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
  uuid: string;
};

export type maskedInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
  scale: number;
};

export type hookFormsTypes = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export type verifiedInputType = basicInputType &
  Omit<maskedInputType, 'mask'> &
  hookFormsTypes;

export type InputProps = hookFormsTypes & {
  inputsList: basicInputType[] | maskedInputType[] | verifiedInputType[];
  controllerHooksForm: Control<FieldValues, any>;
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
