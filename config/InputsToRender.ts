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
        inputType: 'Integer'
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
        label: 'Data:',
        inputType: 'Date',
    },
    { 
        label: 'DateRange:',
        inputType: 'DateRange',
    },
    {
        label: 'Month/Year:',
        inputType: 'MonthYear',
    },
    {
        label: 'Boolean',
        inputType: 'Boolean',
    },
    {
        inputType: 'Time'
    }
]