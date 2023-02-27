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
} ;

export type InputsProps = {
  inputsList: basicInputType[] | maskedInputType[];
};
