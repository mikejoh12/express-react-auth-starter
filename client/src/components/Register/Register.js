import { useState } from 'react';
import axios from 'axios';

function Register() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handlePwdChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password, firstName, lastName);
        try {
            const response = await axios.post('/api/auth/signup', {
                email,
                firstName,
                lastName,
                password,
            })
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    }

    return (
      <>
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email:
                    <input type="email" id="email" name="email" autoComplete='email' required onChange={handleEmailChange}/>
                </label>
            </div>

            <div>
                <label>
                    First Name:
                    <input type="text" name="given-name" autoComplete="given-name" required onChange={handleFirstNameChange}/>
                </label>
            </div>

            <div>
                <label>
                    Last Name:
                    <input type="text" name="family-name" autoComplete='family-name' required onChange={handleLastNameChange}/>
                </label>
            </div>

            <div>
                <label>
                    Password:
                    <input type="password" id="pass" name="password" autoComplete='current-password'
                    minLength="6" required onChange={handlePwdChange}/>
                </label>
            </div>

            <input type="submit" value="Sign up" />
        </form>
      </>
    );
 }

export default Register;