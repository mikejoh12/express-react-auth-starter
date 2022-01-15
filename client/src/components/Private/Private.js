import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

function Private() {

    const [msg, setMsg] = useState(''); // Will be fetched from private API route

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('/api/data/secret');
                setMsg(response.data);
            } catch(err) {
                const errMsg = err.response?.data?.error?.data || 'An error occurred.'
                alert(errMsg);
            }
        }
        getData();
        return () => {
            setMsg('');
          };
    }, [])

    return (
        <Typography component="div">
            <Typography component="h1" variant="h4" align="center">
            Private
            </Typography>
            <Box sx={{ textAlign: 'justify', my: 3 }}>
            This page is using a React Router v6 style "protected route" on the client side. If you try to access /private without being logged in then there will be a redirected to /signin.
            </Box>
            <Box sx={{ textAlign: 'justify', my: 3 }}>
            This page also makes an API-call to a protected route and fetches the super secret number below:
            </Box>
            <Box sx={{ textAlign: 'justify', my: 3 }}>
            {msg || 'Loading'}
            </Box>
      </Typography>
    );
 }

export default Private;