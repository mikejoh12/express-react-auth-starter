import { useState } from 'react';
import axios from 'axios';

function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePwdChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password,
            });
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    }

    return (
      <>
        <h1>Home Page</h1>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email:
                    <input type="email" id="email" name="username" autoComplete='username' required onChange={handleEmailChange}/>
                </label>
            </div>

            <div>
                <label>
                    Password:
                    <input type="password" id="pass" name="password" autoComplete='current-password'
                    minLength="6" required onChange={handlePwdChange}/>
                </label>
            </div>

            <div>
                <input type="submit" value="Sign in" />
            </div>
        </form>
      </>
    );
 }

export default Home;