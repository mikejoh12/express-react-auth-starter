import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Private() {

    return (
        <Typography component="div">
            <Typography component="h1" variant="h4" align="center">
            Private
            </Typography>
            <Box sx={{ textAlign: 'justify', my: 3 }}>
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
            fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
            </Box>
            <Box sx={{ textAlign: 'left', m: 1 }}>Left aligned text.</Box>
            <Box sx={{ textAlign: 'center', m: 1 }}>Center aligned text.</Box>
            <Box sx={{ textAlign: 'right', m: 1 }}>Right aligned text.</Box>
      </Typography>
    );
 }

export default Private;