import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],

    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-12&sortBy=publishedAt&apiKey=4da4024fcb0b490cb56b031302a4a808")
    .then((response) => response.json())
    .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>lifecycle</h1>
        <hr/>
        {this.state.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    );
  }
}

export default App;
