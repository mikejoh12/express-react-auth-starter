import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
        The backend uses express, passport, express-session, pg, connect-pg-simple, helmet, and express-validator.
        It requires a postgres database with 2 tables with the names users and session (for saving the sessions with express-session).
        It uses async/await with Express and separates the "functionality" of the route handlers into controller/service/db layers.
        The passport.js logic is using traditional callback-logic instead of async/await as promise support and documentation for async-await in passport is somewhat limited.
        Routes are documented with Swagger-UI.
        Documentation: 
      </Box>
      
      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Link href="/api/docs" rel="noopener" target="_blank">http://localhost:5000/api/docs</Link>
      </Box>

      <Box sx={{ textAlign: 'justify', my: 3 }}>
        The front-end uses React, React-router v6, and mui (Material UI) v5.
        There is no "confirm password" field as the implementation depends on which form solution is used (controlled components or library such as formik, react-hook-form).
        It provides log-in/log-out from the back-end and stores the user in the Redux auth slice.
        RTK Query (Redux-Toolkit Query) is used to simplify fetching of API related state.
        The httpOnly session cookie used by express-session can be found in Chrome Dev-tools/Application/Cookies and is called connect.sid.
        Logout clears the session cookie and the Redux store. Appreciate any bug reports or contributions.
      </Box>

      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Link href="https://github.com/mikejoh12/express-react-auth-starter" rel="noopener" target="_blank">https://github.com/mikejoh12/express-react-auth-starter</Link>
      </Box>

    </Typography>
  );
 }

export default Main;