const inputList = [
  { label: 'Integer', inputType: 'text', mask: Number, scale: 0 },
  {
    label: 'Double/Float',
    inputType: 'string',
    className: 'doubleFloat',
    mask: Number,
    scale: 4,
  },
  { label: 'String', inputType: 'text' },
  {
    label: 'Date',
    inputType: 'text',
    mask: '00/00/0000',
    regex: /\d{2}\/\d{2}\/\d{4}/,
    message: 'Data inválida',
  },
  {
    label: 'Time',
    inputType: 'text',
    mask: '00:00:00',
    regex: /[0-2][0-4]:[0-5][0-9](?::[0-5][0-9])?/,
    message: 'Hora inválida',
    uuid: crypto.randomUUID()
  },
  { label: 'Boolean', inputType: 'boolean' },
  {
    label: 'Email',
    inputType: 'text',
    maxLength: 100,
    regex: /\w+@[a-zA-Z]+\.com(?:\.br)?/,
    message: 'Email inválido',
  },
  {
    label: 'Url',
    inputType: 'text',
    regex: /(?:https?:\/\/)?(?:\w{3}\.)?\w+(?:\.com|\.com\.br|.net)/,
    message: 'Url invalido',
  },
  {
    label: 'CPF',
    inputType: 'text',
    mask: '000.000.000-00',
    regex: /\d{3}\.\d{3}\.\d{3}-\d{2}/,
    message: 'CPF inválido!',
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
    inputType: 'text',
    className: 'inscricaoEstadual',
  },
  { label: 'Text', inputType: 'textarea' },
];

const reactKeys = inputList.map(() => crypto.randomUUID());
export { inputList, reactKeys };
