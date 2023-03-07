/*
    basic input configs
    {
        label: 'Example',
        inputType: 'Integer' or 'DoubleFloat' or 'String' or 'Date' or 'DateRange' or 'MonthYear' or 'Time' or 'Boolean' or 'Email' or 'Url' or 'CPF' or 'CNPJ' or 'InscricaoEstadual' or 'Text',
        required: 'Message that you want, ex: Required filed',
        className: 'Bold' or 'Italic'...
    }

*/

export const inputsToRender = [
    { 
        label: 'Idade:',
        inputType: 'Integer',
        required: 'Campo obrigátorio!'
    },
    { 
        label: 'Double/Float:',
        inputType: 'DoubleFloat',
        required: 'Campo obrigátorio!'
    },
    { 
        label: 'String:',
        inputType: 'String',
    },
    { 
        label: 'Idade:',
        inputType: 'Date',
    },
    { 
        label: 'DateRange:',
        inputType: 'DateRange',
    },
]