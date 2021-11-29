import { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      dogImgUrl: ""
      // count: 0
    };
    console.log("Trigger: Constructor");
  }

  componentDidMount(){
    console.log("Trigger: On Mount");
    this.handleLoadNewDog();
  }

  componentDidUpdate(){
    console.log("Trigger: On Update");
  }

  componentWillUnmount(){
    console.log("Trigger: On Unmount");
  }

  // handleIncrement=()=>{
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }

  handleLoadNewDog=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        this.setState({
          dogImgUrl: data.message
        });
      });
  }
  

  render(){
    
    console.log("Trigger: Render");

    console.log("Value of Dog Image Url: ",  this.state.dogImgUrl);

    return(
      <div>
        {/* <h1>Hello World</h1>
        <div>{this.state.count}</div>
        <input onChange={this.handleInputChange} /> */}

        <h1>Random Dog Pictures v1</h1>
        <div>
          <img width="400px" src={this.state.dogImgUrl} alt="Random Dog Image" />
        </div>
        <button onClick={this.handleLoadNewDog}>Load new dog</button>
      </div>
    )
  }
}

export default App;
