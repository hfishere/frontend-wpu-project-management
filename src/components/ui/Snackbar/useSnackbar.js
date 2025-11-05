import { useContext } from 'react';

import { SnackbarContext } from './SnackbarContextObject';

const useSnackbar = () => {
  const snackbar = useContext(SnackbarContext);
  return snackbar;
};

export default useSnackbar;
