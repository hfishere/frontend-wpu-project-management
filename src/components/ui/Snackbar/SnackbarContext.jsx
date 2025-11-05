import { Snackbar } from '@mui/material';
import { useState } from 'react';

import { SnackbarContext } from './SnackbarContextObject';

const SnackbarProvider = ({ children }) => {
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: '',
  });

  const toggleSnackbar = (toggle, message = '') => {
    setSnackbarData({
      open: toggle,
      message,
    });
  };
  return (
    <SnackbarContext.Provider
      value={{
        snackbarData,
        toggleSnackbar,
      }}
    >
      {children}
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={() => toggleSnackbar(false)}
        message={snackbarData.message}
        open={snackbarData.open}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
