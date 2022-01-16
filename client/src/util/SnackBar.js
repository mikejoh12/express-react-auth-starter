import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearSnackbar, selectSnackBarOpen, selectSnackbarMessage } from "../features/ui/uiSlice";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function MsgSnackbar() {
    const dispatch = useDispatch();

    const { message, severity } = useSelector(selectSnackbarMessage);
    const snackbarOpen = useSelector(selectSnackBarOpen);
  
    function handleClose() {
        dispatch(clearSnackbar());
      }

    return (
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
 }