import { css } from '@emotion/react';

export const styles = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
  },
  ' .App':
  {
    overflowY: 'scroll',
    width: '100vw',
    height: '100vh'
  }
});
