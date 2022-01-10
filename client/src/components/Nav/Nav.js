import { Link } from "react-router-dom";

function Nav() {
    return (
      <>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/register">Register</Link> |{" "}
            <Link to="account">Account</Link>
        </nav>
      </>
    );
 }

export default Nav;