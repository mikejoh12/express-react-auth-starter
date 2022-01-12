import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Account({user}) {

    return (
      <Typography component="div">
        <Typography component="h1" variant="h4" align="center">
          Account Page
        </Typography>
        <Box sx={{ textAlign: 'justify', my: 3 }}>
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
          fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
        </Box>
        { user &&
          <>
            <Box sx={{ textAlign: 'center', m: 1 }}>{user.first_name} {user.last_name}</Box>
            <Box sx={{ textAlign: 'center', m: 1 }}>{user.email}</Box>
          </>
        }
      </Typography>
    );
 }

export default Account;