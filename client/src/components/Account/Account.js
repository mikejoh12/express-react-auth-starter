import { useState, useEffect } from 'react';
import axios from 'axios';

function Account() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getInfo() {
      try {
          const response = await axios.get('/api/users/account');
          console.log(response.data);
          setFirstName(response.data.user.first_name);
          setLastName(response.data.user.last_name);
          setEmail(response.data.user.email);
      } catch(err) {
          console.log(err);
      }
    }
    getInfo();
  }, []);


    return (
      <>
        <h1>Account Page</h1>
        {
          (firstName && lastName) ?
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
          </div>
          :
          <h2>Not Logged In</h2>
        }
      </>
    );
 }

export default Account;