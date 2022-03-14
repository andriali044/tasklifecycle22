import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      search: ""
    }
  }

  //taruh statenya di dalam q=...
  componentDidMount() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=4da4024fcb0b490cb56b031302a4a808")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        articles: myJson.articles
      });
    });
  }
  
changeNews = (e) => {
  this.setState({ [e.target.name] : e.target.value })
  console.log(e.target.value)
}

searchNews = (e) => {
  e.preventDefault();
  
  
  this.state();
}
//buat function untuk onSubmit

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <form onSubmit={this.state}> {/* edit lagi */}
            <label className='label'>Searching News with NewsAPI</label>
            <input type="text" name='search' value={this.state.search} className='form-control my-1'
            onChange={this.changeNews} placeholder='input your search in here' />
            <input type="submit" value="Submit" className='btn btn-primary' />
          </form>
        </div>
          <div className="App">
            {this.state.articles.map((item, index)=>{
              return (
                <div key={index}>
                  <h2 style={{textAlign:'left'}}>
                    {item.title}
                  </h2>
                  <img src={item.urlToImage} style={{width:'50vw'}}/>
                  <a href={item.url}>read more</a>
                  <p>
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default App;
