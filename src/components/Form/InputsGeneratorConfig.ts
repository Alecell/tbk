const inputList = [
  { label: 'Integer', inputType: 'number' },
  {
    label: 'Double/Float',
    inputType: 'string',
    className: 'doubleFloat'
  },
  { label: 'String', inputType: 'text' },
  { label: 'Date', inputType: 'date' },
  { label: 'Time', inputType: 'time', step: 1 },
  { label: 'Boolean', inputType: 'boolean' },
  {
    label: 'Email',
    inputType: 'text',
    maxLength: 100,
    regex: /\w+@[a-zA-Z]+\.com(?:\.br)?/gm,
    message: 'Email inválido',
  },
  {
    label: 'Url',
    inputType: 'text',
    regex: /\w{4}s?:\/\/\w{3}\.?\w+\.(?:com|com\.br|net)?$/,
    message: 'Url invalido',
  },
  {
    label: 'CPF',
    inputType: 'text',
    mask: '000.000.000-00',
    regex: /\d{3}\.\d{3}\.\d{3}-\d{2}/g,
    message: 'CPF inválida!',
  },
  {
    label: 'CNPJ',
    inputType: 'text',
    mask: '00.000.000/0000-00',
    regex: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/,
    message: 'CNPJ inválido!',
  },
  {
    label: 'Inscrição Estadual',
    inputType: 'number',
    className: 'inscricaoEstadual',
  },
  { label: 'Text', inputType: 'textarea' }
];

const reactKeys = inputList.map(() => crypto.randomUUID());

export { inputList, reactKeys };

