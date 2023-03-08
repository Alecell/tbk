import { css } from '@emotion/react';

export const styles = css({
  Boolean: {
    padding: '2px 0',
  },
  ' .switch': {
    position: 'relative',
    display: 'inlineBlock',
    width: '60px',
    height: '26px',
  },
  input: {
    opacity: 0,
    width: 0,
    height: 0,
    ':checked + .slider': {
      backgroundColor: `${import.meta.env.VITE_BOOLEAN_ACTIVE_COLOR}`,
    },
    ':checked + .slider:before': {
      transform: 'translateX(32px)',
    },
  },
  ' .slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `${import.meta.env.VITE_BOOLEAN_NOT_ACTIVE_COLOR}`,
    transition: '0.4s',
    ':before': {
      position: 'absolute',
      content: '""',
      height: '18px',
      width: '18px',
      left: '4px',
      bottom: '4px',
      backgroundColor: `${import.meta.env.VITE_BOOLEAN_COLOR_BALL}`,
      transition: '0.4s',
    },
  },
  ' .round': {
    borderRadius: '32px',
    ':before': {
      borderRadius: '50%',
    },
  },
});
