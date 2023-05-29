import logo from './logo.svg';
import './App.css';
import H1 from './components';
import Boxs from './boxs';
import { useState } from 'react';
import Colors from './color';

function App() {
  const [count, setCount]= useState(1);
  // const duplicateArray = Array.from({length: 100}).map(()=> ({color: ""}));
  // const colors = ["red", "blue", "yellow", "skyblue", "purple", "green", "brown", "grey"];
  // colors[Math.floor(Math.random() * colors.length)]

  function onClick(index){

  }
  return (
    <div className="App">
{
  <h1>This button is {count > 10 ? 0 : count} times click</h1>
//   count?

// <h1>ravi</h1>
// :
// <h1>ravina</h1>
}
        <button onClick={() =>setCount(count+1)}>click me</button>
      
      <div className='box-container'>
        {
          // duplicateArray.map((ele, i) => (
          //   <Boxs onClick={onClick} label={i+1} color={ele.color}/>
          // ))
        }
        <Colors/>
      </div>
    </div>
    
  );
}

export default App;
