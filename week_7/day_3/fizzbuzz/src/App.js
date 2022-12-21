import {useState,useEffect} from 'react'
import './App.css';

function App() {


  const [inputNumber,setInputNumber] = useState(1);
  const [answer,setAnswer] = useState("");

  useEffect(() => {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  },[inputNumber])

  const addNumber = () => {
    setInputNumber(inputNumber+1)
  };

  return (
    <div>
      <h1>Current Number is {inputNumber}</h1>
      <button onClick={addNumber}>+1</button>
      <h1>{answer}</h1>
    </div>
    
  );
}

export default App;
