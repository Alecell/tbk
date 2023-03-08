import { css } from '@emotion/react';
import { mediaQueryStyles } from './MediaQueriesInputs.style';
const styles = css({
  ' .input': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.35em',

    '& input': {
      padding: '0.3em',
      fontWeight: 'bold',
    },
    '& input, textarea': {
      border: '1px solid #000',
      borderRadius: '5px',
    },
    '& label:first-of-type': {
      display: 'inline-block',
      width: '9.375em',
      marginRight: '0.313em',
      textAlign: 'right',
    },
  },
  ' .input-error_message--container': {
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      marginTop: '1px',
    },
  },
  ' .Text': {
    '& label': {
      alignSelf: 'flex-start',
    },
    '& textarea': {
      resize: 'none',
      padding: '2px',
      height: '15.625em',
      width: '25em',
    },
  },

  /* Inputs size */
  '.Integer, .doubleFloat': {
    '& input': {
      textAlign: 'right',
      width: '8em',
    },
  },
  ' .input-date-range--container': {
    '& input': {
      width: '6.5em',
    },
    '& span:first-of-type': {
      color: '#000',
      padding: '0 0.5em',
    },
  },

  '.Date, .Time, .MonthYear': {
    '& input': {
      width: '6.5em',
    },
  },

  '.String, .Email, .Url': {
    '& input': {
      width: '16em',
    },
  },

  '.CPF, .inscricaoEstadual': {
    '& input': {
      width: '8.5em',
    },
  },

  '.CNPJ input': {
    width: '10em',
  },

  /* Color styles */

  'input:focus, textarea:focus': {
    outline: 'none',
    border: '2px solid #2f58cd',
  },

  '.required input': {
    border: '1px solid red',
  },
});

export const stylesWithMediaQuerys = css({...styles})