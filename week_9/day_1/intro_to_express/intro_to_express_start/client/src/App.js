import React,{useEffect, useState} from 'react'
import './App.css';



function App() {

  const [message,setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:9000')
      .then(response => response.json())
      .then(data => setMessage(data.message))
  })


  return (
    <>
      <h1>Intro to Express</h1>
      <p>The server said: {message}</p>
    </>
  );
}

export default App;