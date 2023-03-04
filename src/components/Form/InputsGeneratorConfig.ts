const inputList = [
  {
    label: 'Integer',
    inputType: 'text',
    mask: Number,
    scale: 0,
    uuid: crypto.randomUUID(),
  },
  {
    label: 'Double/Float',
    inputType: 'string',
    className: 'doubleFloat',
    mask: Number,
    scale: 4,
    uuid: crypto.randomUUID(),
  },
  { label: 'String', inputType: 'text', uuid: crypto.randomUUID(), required: 'Campo obrigatório!' },
  {
    label: 'Date',
    inputType: 'text',
    mask: '00/00/0000',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    message: 'Data inválida',
    uuid: crypto.randomUUID(),
  },
  {
    label: 'Date Range',
    inputType: 'dateRange',
    className: 'dateRange',
    message: 'Data inválida! A data inicial não pode ser maior que a final',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    mask: '00/00/0000',
    uuid: crypto.randomUUID()
  },
  {
    label: 'Month/Year',
    inputType: 'text',
    className: 'MonthYear',
    mask: '00/0000',
    regex: /\d{2}\/\d{4}/,
    message: 'Data inválida',
    uuid: crypto.randomUUID(),
  },
  {
    label: 'Time',
    inputType: 'text',
    mask: '00:00:00',
    regex: /[0-2][0-4]:[0-5][0-9](?::[0-5][0-9])?/,
    message: 'Hora inválida',
    uuid: crypto.randomUUID(),
  },
  { label: 'Boolean', inputType: 'boolean', uuid: crypto.randomUUID() },
  {
    label: 'Email',
    inputType: 'text',
    maxLength: 100,
    regex: /\w+@[a-zA-Z]+\.com(?:\.br)?/,
    message: 'Email inválido',
    uuid: crypto.randomUUID(),
  },
  {
    label: 'Url',
    inputType: 'text',
    regex: /(?:https?:\/\/)?(?:\w{3}\.)?\w+(?:\.com\.br|\.com|\.br|\.net):?(?:6553[0-5]|655[0-3][0-5]|65[0-5][0-3][0-5]|6[0-5][0-3][0-5]|[1][0-5]?[0-5]?[0-3]?[0-5]?)?$/,
    message: 'Url invalido',
    uuid: crypto.randomUUID(),
  },
  {
    label: 'CPF',
    inputType: 'text',
    mask: '000.000.000-00',
    regex: /\d{3}\.\d{3}\.\d{3}-\d{2}/,
    message: 'CPF inválido!',
    uuid: crypto.randomUUID(),
    required: 'Campo obrigátorio!'
  },
  {
    label: 'CNPJ',
    inputType: 'text',
    mask: '00.000.000/0000-00',
    regex: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/,
    message: 'CNPJ inválido!',
    uuid: crypto.randomUUID(),
  },
  {
    label: 'Inscrição Estadual',
    inputType: 'text',
    className: 'inscricaoEstadual',
    uuid: crypto.randomUUID(),
  },
  { label: 'Text', inputType: 'textarea', uuid: crypto.randomUUID() },
];

export { inputList };
