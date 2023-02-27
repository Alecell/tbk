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
}

export type maskedInputType = basicInputType & {
    mask: string;
    regex: RegExp;
};  

export type inputAttributes = basicInputType | maskedInputType;

export type InputsProps = {
  inputsList: inputAttributes[];
};

