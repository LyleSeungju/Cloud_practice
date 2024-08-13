import React, { useState } from 'react';
import axios from 'axios'; // axios 가져오기

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      // axios를 사용하여 HTTP GET 요청 보내기
      const response = await axios.get('http://192.168.3.98:8080/getData');
      setMessage(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>React to Node.js Example</h1>
      <button onClick={fetchData}>Fetch Message</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
