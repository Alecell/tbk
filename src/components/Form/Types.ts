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
  step?: number;
  maxLength?: number;
};

export type maskedInputType = basicInputType & {
  mask: string;
  regex: RegExp;
  message: string;
};

export type hookFormsTypes = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export type InputProps = hookFormsTypes & {
  inputsList: basicInputType[] | maskedInputType[];
  controllerHooksForm: Control<FieldValues, any>
};

export type BasicInputProps = {
  input: basicInputType
  key: string
} & hookFormsTypes;

export type MaskedInputProps = {
  input: maskedInputType;
  key: string
  controllerHooksForm: Control<FieldValues, any>
} & hookFormsTypes;