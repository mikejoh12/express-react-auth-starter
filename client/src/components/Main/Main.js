import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Main() {

    return (
    <Typography component="div">
      <Typography component="h1" variant="h4" align="center">
        Express-React-Auth-Starter
      </Typography>
      <Box sx={{ textAlign: 'justify', my: 3 }}>
        This project sets up a Postgres, Express, React, and Node.js web-app quickly inluding user authentication with passport.js/express-session.
      </Box>

      <Box sx={{ textAlign: 'justify', my: 3 }}>
        The backend uses express, passport, express-session, pg, connect-pg-simple, helmet, and express-validator. It requires a postgres database with 2 tables with the names users and session (for saving the sessions with express-session). It uses async/await with Express to avoid callbacks and separates the "functionality" of the route handlers into controller/service/db layers.
      </Box>

      <Box sx={{ textAlign: 'justify', my: 3 }}>
        The front-end uses React, React-router v6, mui (Material UI) v5, and axios. It provides log-in/log-out from the back-end and stores the user in Redux. RTK Query (Redux-Toolkit Query) is used to simplify fetching of API related state. The httpOnly session cookie used by express-session can be found in Chrome Dev-tools/Application/Cookies and is called connect.sid. Logout clears the session cookie and the Redux store.
      </Box>

    </Typography>
  );
 }

export default Main;