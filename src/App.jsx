import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
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
    </>
  );
}

export default App;
