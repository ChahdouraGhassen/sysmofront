import React from 'react';
import './Login.css';
import Logo from '../../images/profil-sysmo.png';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Link } from 'react-router-dom';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <div className="App">
        <img className='img' src={Logo} width="25%" alt='' />
        <div className='card'>
          <h4>Connectez-vous pour démarrer votre session</h4>
          <input className='input' type='email' required />
          <input className='input' type='password' required />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Welcome
            </Alert>
          </Snackbar>
          <Link to='AddReparation'>
            <button className='btn-connexion' onClick={handleClick}>S'identifier</button>
          </Link>
        </div>
      </div>
    </Stack>
  );
}
export default Login;
