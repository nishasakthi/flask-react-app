import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <h1>React Frontend Implementation</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
