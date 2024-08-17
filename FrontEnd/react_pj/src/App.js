import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [dbmsg, setDbmsg] = useState('');
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://moreburger.org/getData');
      setMessage(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data.');
    }
  };

  const requestDB = async () => {
    try {
      const res = await axios.get('https://moreburger.org/getData/getDB');
      setDbmsg(res.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch DB data.');
    }
  };

  return (
    <div>
      <h1>React to Node.js Example</h1>
      <button onClick={fetchData}>Fetch Message</button>
      {message && <p>{message}</p>}
      <button onClick={requestDB}>Request DB data</button>
      {Array.isArray(dbmsg) ? (
        <ul>
          {dbmsg.map((item, index) => (
            <li key={index}>
              {item.name} - {item.birth}
            </li>
          ))}
        </ul>
      ) : (
        <p>{dbmsg}</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
