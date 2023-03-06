const inputList = [
  {
    label: 'Integer',
    inputType: 'Integer',
    mask: Number,
    scale: 0,
    reactKey: crypto.randomUUID(),
  },
  {
    label: 'Double/Float',
    inputType: 'Double/Float',
    mask: Number,
    scale: 4,
    reactKey: crypto.randomUUID()
  },
  {
    label: 'String',
    inputType: 'String',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Date',
    inputType: 'Date',
    mask: '00/00/0000',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    message: 'Data inválida',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Date Range',
    inputType: 'DateRange',
    mask: '00/00/0000',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    message: 'Data inválida! A data inicial não pode ser maior que a final',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Month/Year',
    inputType: 'MonthYear',
    mask: '00/0000',
    regex: /\d{2}\/\d{4}/,
    message: 'Data inválida',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Time',
    inputType: 'Time',
    mask: '00:00:00',
    regex: /[0-2][0-4]:[0-5][0-9](?::[0-5][0-9])?/,
    message: 'Hora inválida',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Boolean', 
    inputType: 'Boolean', 
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Email',
    inputType: 'Email',
    regex: /\w+@[a-zA-Z]+\.com(?:\.br)?/,
    message: 'Email inválido!',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Url',
    inputType: 'Url',
    regex: /(?:https?:\/\/)?(?:\w{3}\.)?\w+(?:\.com\.br|\.com|\.br|\.net):?(?:6553[0-5]|655[0-3][0-5]|65[0-5][0-3][0-5]|6[0-5][0-3][0-5]|[1][0-5]?[0-5]?[0-3]?[0-5]?)?$/,
    required: 'Campo obrigátorio!',
    reactKey: crypto.randomUUID()

  },
  {
    label: 'CPF',
    inputType: 'CPF',
    mask: '000.000.000-00',
    regex: /\d{3}\.\d{3}\.\d{3}-\d{2}/,
    message: 'CPF inválido!',
    required: 'Campo obrigátorio!',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'CNPJ',
    inputType: 'CNPJ',
    mask: '00.000.000/0000-00',
    regex: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/,
    message: 'CNPJ inválido!',
    reactKey: crypto.randomUUID()
  },
  {
    label: 'Inscrição Estadual',
    inputType: 'InscricaoEstadual',
    maxLength: 20,
    reactKey: crypto.randomUUID()
  },
  { 
    label: 'Text', 
    inputType: 'textarea', 
    reactKey: crypto.randomUUID() 
  }

];

export { inputList };
