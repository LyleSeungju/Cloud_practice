import React, { useState } from 'react';
import axios from 'axios'; // axios 가져오기

function App() {
  const [message, setMessage] = useState('');
  const [dbmsg, setDbmsg] = useState('');

  const fetchData = async () => {
    try {
      // axios를 사용하여 HTTP GET 요청 보내기
      const response = await axios.get('https://moreburger.org/getData');
      setMessage(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const requestDB = async () => {
    try {
      const res = await axios.get('https://moreburger.org/getData/getDB');
      setDbmsg(res.data);
    } catch (err){
      console.error('Error fetching data:', err);
    }
  };
  return (
    <div>
      <h1>React to Node.js Example</h1>
      <button onClick={fetchData}>Fetch Message</button>
      {message && <p>{message}</p>}
      <button onClick={requestDB}>Request DB data</button>
      {dbmsg && <p>{dbmsg}</p>}
    </div>
  );
}
export default App
