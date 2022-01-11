import { Link } from "react-router-dom";
import axios from 'axios';

function Nav({user, setUser}) {

    async function logout() {
      try {
          const response = await axios.post('/api/auth/logout');
          console.log(response.data);
          setUser(null);
      } catch(err) {
          console.log(err);
      }
    }

    return (
      <>
        <nav>
            { !user && <button><Link to="/">Sign In</Link></button> }
            { !user && <button><Link to="/register">Register</Link></button> }
            { user && <button><Link to="account">Account</Link></button> }
            { user && <button onClick={logout}>Logout</button> }
        </nav>
      </>
    );
 }

export default Nav;