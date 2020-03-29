import React, { Component } from 'react';
import UserCardList from './components/userCardList';
import './App.css';

class App extends Component {
  
  state = {
      userData: [],
      title: "Peeps"
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=1")
    const data = await response.json();
    return data.results
  };

  handleClick =  async () => {
    const newUserData = await this.loadData();
    this.setState({
      userData: newUserData
    });
  };

  componentDidMount = async () => {
    const userData = await this.loadData();
    this.setState({
      userData: userData
    });
  };

  render() {
      const { title, userData } = this.state;
      return(
        <div className = "App">
          <h1>{title}</h1>
          <button onClick = {this.handleClick}>Load New Users</button>
          <UserCardList userData={userData} />
        </div>
      )
  }
}
  

export default App;
