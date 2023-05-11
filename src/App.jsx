import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const createUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    // data are sending to the server
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
      });
    form.reset();
  };
  console.log(users);

  return (
    <>
      <h1 style={{ color: 'green' }}>User Management System</h1>
      <div>
        <h3>There are some users</h3>
        {users.map((user) => (
          <p key={user.id}>
            {' '}
            id: {user.id} :: user name : {user.name}
          </p>
        ))}
      </div>
      <h3>Sending data to the backend</h3>
      <form onSubmit={createUser}>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <input type="text" name="name" id="" placeholder="name" />
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <input type="email" name="email" id="" placeholder="email" />
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
}

export default App;
