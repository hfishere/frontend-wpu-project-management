import { createContext } from 'react';

const defaultState = {
  open: false,
  message: '',
  toggleSnackbar() {},
};

export const SnackbarContext = createContext(defaultState);
