import logo from './logo.svg';
import './App.css';
import H1 from './components';
import Boxs from './boxs';
import { Component, useState } from 'react';
import Colors from './color';
import Button from './button';
import { render } from '@testing-library/react';
import Form from './form';
import UseRef from './useref';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: false
    }
  }
  // const [count, setCount]= useState(1);
  // const duplicateArray = Array.from({length: 100}).map(()=> ({color: ""}));
  // const colors = ["red", "blue", "yellow", "skyblue", "purple", "green", "brown", "grey"];
  // colors[Math.floor(Math.random() * colors.length)]
  render() {

    // function onClick(index){

    // }
    return (
      <div className="App">
        <Boxs label={20} />
        {/* <UseRef /> */}
        {/* <Form /> */}
        {/* <h1>This button is {this.state.count > 10 ? 0 : this.state.count} times click</h1> */}
        {/* { this.state.count?
<h1>ravi</h1>
:
 <h1>ravina</h1>} */}
        {/* <button onClick={() => this.setState({count:!this.state.count})}>click me</button> */}

        <div className='box-container'>
          {
            // duplicateArray.map((ele, i) => (
            //   <Boxs onClick={onClick} label={i+1} color={ele.color}/>
            // ))
          }
          {/* <Colors/> */}

          {/* <Button title={"this is class component"}/>
        <Button title={"this is function component"}/> */}

        </div>
      </div>
    );
  }
}

export default App;
