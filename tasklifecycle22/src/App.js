import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
class App extends React.Component {
  constructor(){
    super()
    // inisiasi state awal
    this.state = {
      search: "*",
      articles: []
      
    }
  }
  
  // di jalankan saat pertama kali komponen di render
  componentDidMount() {
    this.getNews();
  }

  // fungsi ini untuk mengambil data API ke newsapi menggunakan fetch
  getNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=${this.state.search}&from=2022-02-16&sortBy=publishedAt&apiKey=4da4024fcb0b490cb56b031302a4a808`
    fetch(url)
    .then((response) => {
      console.log({response})
      return response.json();
    })
    .then((myJson) => {
      console.log({myJson})
      // setState di gunakan untuk menyimpan data json dari API ke dalam state.sarticles
      this.setState({
        articles: myJson.articles
      });
    });
  }

// FUngsi ini untuk memperbaharui nilai state.search
changeNews = (e) => {
  this.setState({ [e.target.name] : e.target.value })
}

// fungsi ini ke triger saat onSubmit
searchNews = (e) => {
  e.preventDefault();

  // cara memmanggil fungsi getNews
  this.getNews();
}

  render() {
    return (
      <div>
        <div>
          {/* onSubmit ke triger saat tombol submit di klik */}
          <form onSubmit={this.searchNews}>
            <label className='label'>Searching News with NewsAPI</label>
            <input type="text" name='search' value={this.state.search} className='form-control my-1'
            onChange={this.changeNews} placeholder='input your search in here' />
            {/* onChange keTriger saat nilai input berubah */}
            <input type="submit" value="andri mencari" className='btn btn-primary' />
          </form>
          <div className="row"></div>
        </div>
          <div className="App">
            {/* Mapping nilai dari state.articles */}
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
