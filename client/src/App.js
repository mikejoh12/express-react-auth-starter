import { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MsgSnackBar from './util/SnackBar';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import StickyFooter from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Private from './components/Private/Private';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const theme = createTheme();

function App() {
  
  const [user, setUser] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');

  const showAlert = (msg) => {
    setSnackBarMsg(msg);
    setSnackBarOpen(true);
  }

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
    setSnackBarMsg('');
  }

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>
            <MsgSnackBar  snackBarOpen={snackBarOpen}
                              snackBarMsg={snackBarMsg}
                              handleCloseSnackBar={handleCloseSnackBar} />
            <BrowserRouter>
                <Header user={user} setUser={setUser} showAlert={showAlert} />
                <Container component="main" sx={{ mt: 8, mb: 2}} maxWidth="sm">
                  <Routes>
                          <Route path="/" element={<Main />} />
                          <Route path="/signin" element={<SignIn setUser={setUser} showAlert={showAlert} />} />
                          <Route path="/account" element={<Account user={user}/>} />
                          <Route path="/private" element={<Private />} />
                          <Route path="/signup" element={<SignUp />} />
                  </Routes>
                </Container>
                <StickyFooter />
            </BrowserRouter>
        </Box>
      </ThemeProvider>

  );
}

export default App;
