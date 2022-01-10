import { Link } from "react-router-dom";
import axios from 'axios';

async function logout() {
  try {
      const response = await axios.post('/api/auth/logout');
      console.log(response.data);
  } catch(err) {
      console.log(err);
  }
}

function Nav() {
    return (
      <>
        <nav>
            <button><Link to="/">Home</Link></button> |{" "}
            <button><Link to="/register">Register</Link></button> |{" "}
            <button><Link to="account">Account</Link></button> |{" "}
            <button onClick={logout}>Logout</button>
        </nav>
      </>
    );
 }

export default Nav;