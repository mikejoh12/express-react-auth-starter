import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAuth } from '../../hooks/useAuth';

function Account() {
    const { user } = useAuth();
    
    return (
      <Typography component="div">
        <Typography component="h1" variant="h4" align="center">
          Account Page
        </Typography>
        <Box sx={{ textAlign: 'justify', my: 3 }}>
          This page just has some account data that was fetched when logging in. It is now stored with Redux in the auth-slice. This is also a protected route on the client side and will provide a redirect to /signin if accessed when logged out.
        </Box>
        { user &&
          <>
            <Box sx={{ textAlign: 'center', m: 1 }}>Name: {user.first_name} {user.last_name}</Box>
            <Box sx={{ textAlign: 'center', m: 1 }}>Email: {user.email}</Box>
          </>
        }
      </Typography>
    );
 }

export default Account;