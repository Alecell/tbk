import { preFormatedInputsType } from "./Types";

const preFormatedInputs: preFormatedInputsType = {
  Integer: {
    label: 'Integer',
    inputType: 'Integer',
    scale: 0,
    reactKey: crypto.randomUUID(),
  },
  DoubleFloat: {
    label: 'Double/Float',
    inputType: 'Double/Float',
    scale: 4,
    reactKey: crypto.randomUUID(),
  },
  String: {
    label: 'String',
    inputType: 'String',
    reactKey: crypto.randomUUID(),
  },
  Date: {
    label: 'Date',
    inputType: 'Date',
    mask: '00/00/0000',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    message: 'Data inválida',
    reactKey: crypto.randomUUID(),
  },
  DateRange: {
    label: 'Date Range',
    inputType: 'DateRange',
    mask: '00/00/0000',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    message: 'Data inválida! A data inicial não pode ser maior que a final',
    reactKey: crypto.randomUUID(),
  },
  MonthYear: {
    label: 'Month/Year',
    inputType: 'MonthYear',
    mask: '00/0000',
    regex: /\d{2}\/\d{4}/,
    message: 'Data inválida',
    reactKey: crypto.randomUUID(),
  },
  Time: {
    label: 'Time',
    inputType: 'Time',
    mask: '00:00:00',
    regex: /[0-2][0-4]:[0-5][0-9](?::[0-5][0-9])?/,
    message: 'Hora inválida',
    reactKey: crypto.randomUUID(),
  },
  Boolean: {
    label: 'Boolean',
    inputType: 'Boolean',
    reactKey: crypto.randomUUID(),
  },
  Email: {
    label: 'Email',
    inputType: 'Email',
    regex: /\w+@[a-zA-Z]+\.com(?:\.br)?/,
    message: 'Email inválido!',
    reactKey: crypto.randomUUID(),
  },
  Url: {
    label: 'Url',
    inputType: 'Url',
    regex:
      /(?:https?:\/\/)?(?:\w{3}\.)?\w+(?:\.com\.br|\.com|\.br|\.net):?(?:6553[0-5]|655[0-3][0-5]|65[0-5][0-3][0-5]|6[0-5][0-3][0-5]|[1][0-5]?[0-5]?[0-3]?[0-5]?)?$/,
    required: 'Campo obrigátorio!',
    reactKey: crypto.randomUUID(),
  },
  CPF: {
    label: 'CPF',
    inputType: 'CPF',
    mask: '000.000.000-00',
    regex: /\d{3}\.\d{3}\.\d{3}-\d{2}/,
    message: 'CPF inválido!',
    required: 'Campo obrigátorio!',
    reactKey: crypto.randomUUID(),
  },
  CNPJ: {
    label: 'CNPJ',
    inputType: 'CNPJ',
    mask: '00.000.000/0000-00',
    regex: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/,
    message: 'CNPJ inválido!',
    reactKey: crypto.randomUUID(),
  },
  InscricaoEstadual: {
    label: 'Inscrição Estadual',
    inputType: 'InscricaoEstadual',
    maxLength: 20,
    reactKey: crypto.randomUUID(),
  },
  Text: {
    label: 'Text',
    inputType: 'textarea',
    reactKey: crypto.randomUUID(),
  }
}

export { preFormatedInputs };
