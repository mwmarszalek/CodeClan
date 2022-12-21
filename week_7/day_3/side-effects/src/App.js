import {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [number,setNumber] = useState(0);
  const [doubleNum, setDoubleNum] = useState(0);

  useEffect(() => {
    setDoubleNum(number *2)
  },[number])


  const handleInc = () => {
    setNumber(number+1)
  };

  const handleDec = () => {
    setNumber(number-1)
  };

  return (
    <div>
      <button value={number} onClick={handleInc}>+</button>
      <button value={number} onClick={handleDec}>-</button>
      <h2>Number is {number}</h2>
      <h2>Double num is {doubleNum}</h2>
    </div>
    
  );
}

export default App;
