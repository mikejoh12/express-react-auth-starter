import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Nav({user, setUser, showAlert}) {

  let navigate = useNavigate();

  async function logout() {
    try {
        await axios.post('/api/auth/logout');
        setUser(null);
        showAlert('Logout Successful');
        navigate('/');
    } catch(err) {
        console.log(err);
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