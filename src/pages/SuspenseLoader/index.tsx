import { useEffect } from 'react';
import nprogress from 'nprogress/nprogress.js';
import { Box, CircularProgress } from '@mui/material';

function SuspenseLoader() {
  useEffect(() => {
    nprogress.start();

    return () => {
      nprogress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={64} disableShrink thickness={3} />
    </Box>
  );
}

export default SuspenseLoader;
