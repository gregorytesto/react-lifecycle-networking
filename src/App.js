import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      count: 0
    };
    console.log("Trigger: Constructor");
  }

  componentDidMount(){
    console.log("Trigger: On Mount");
  }

  componentDidUpdate(){
    console.log("Trigger: On Update");
  }

  componentWillUnmount(){
    console.log("Trigger: On Unmount");
  }

  handleIncrement=()=>{
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    console.log("Trigger: Render");

    return(
      <div>
        <h1>Hello World</h1>
        <div>{this.state.count}</div>
        <input onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default App;
