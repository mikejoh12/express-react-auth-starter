import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetSecretMsgQuery } from '../../services/api';

function Private() {

    const { data, isLoading } = useGetSecretMsgQuery();

    return (
        <Typography component="div">
            <Typography component="h1" variant="h4" align="center">
            Private
            </Typography>
            <Box sx={{ textAlign: 'justify', my: 3 }}>
            This page is using a React Router v6 style "protected route" on the client side. If you try to access /private without being logged in then there will be a redirected to /signin.
            </Box>
            <Box sx={{ textAlign: 'justify', my: 3 }}>
            This page also makes an API-call to a protected API route ('api/data/secret'). Access to the route is enabled by having the session ID in a httpOnly cookie. It fetches the super secret string below. :
            </Box>

            {data ?
                <Box sx={{ textAlign: 'justify', my: 3 }}>
                    {data}
                </Box> :
            isLoading ?
                <Box sx={{ textAlign: 'center', my: 3 }}>
                    <CircularProgress color="secondary" />
                </Box>
                : null }
      </Typography>
    );
 }

export default Private;