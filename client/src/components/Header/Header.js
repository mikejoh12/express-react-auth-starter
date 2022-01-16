import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import { useLogoutMutation } from '../../services/api';
import { showSnackbar } from '../../features/ui/uiSlice';

export default function Nav({showAlert}) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [logoutOfApi, { isLoading }] = useLogoutMutation();

  async function logout() {
    try {
        await logoutOfApi().unwrap();
        dispatch(logOut())
        dispatch(showSnackbar({
          message: 'Log Up Successful',
          severity: 'success'
        }));
        navigate('/');
    } catch(err) {
      dispatch(showSnackbar({
        message: 'There was a problem logging out',
        severity: 'error'
      }));
    }
  }

  return (
    <Box sx={{flexGrow: 0}}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: "center"}}>
          { !user && <Button component={Link} to="/signin" color="inherit">Sign In</Button> }
          { !user && <Button component={Link} to="/signup" color="inherit">Sign Up</Button> }
          <Button component={Link} to="/" color="inherit">Main</Button>
          { user &&<Button component={Link} to="/account" color="inherit">Account</Button> }
          { user && <Button component={Link} to="/private" color="inherit">Private</Button> }
          { user && <Button color="inherit" onClick={logout}>Logout</Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}