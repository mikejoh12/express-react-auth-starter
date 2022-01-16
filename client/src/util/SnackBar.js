import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function MsgSnackbar({snackBarOpen, snackBarMsg, handleCloseSnackBar}) {
    return (
        <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleCloseSnackBar} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleCloseSnackBar} severity="success">
                {snackBarMsg}
            </Alert>
        </Snackbar>
    );
 }