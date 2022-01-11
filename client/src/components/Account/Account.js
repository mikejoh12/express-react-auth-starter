function Account({user}) {

    return (
      <>
        <h1>Account Page</h1>
        {
          user ?
          <div>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
          </div>
          :
          <h2>Not Logged In</h2>
        }
      </>
    );
 }

export default Account;