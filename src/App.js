import React, { Component } from 'react';
import './App.css';

// Importing form and Movies components
import Form from "./Component/Form"
import Movies from './Component/Movies';

const A_KEY = "522f4138";

class App extends Component {


  state = {
    movies: []
  }

  // To fetch JSON for the search and store in movies
  getMovie = async(e) => {

    const movieName = e.target.elements.movieName.value;
    // To help prevent the default refreshing behaviour of Javascript
    e.preventDefault();

    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${A_KEY}&s=${movieName}`);

    const data = await api_call.json();
    
    // Updating the state of the movieTitles available
    this.setState({movies: data.Search});
    

  }

  // To handle the case where there is no movie found
  // The JSON object returned is undefined
  renderList(movieList){
    if(movieList===undefined){
      return <p>No Movies found!!</p>
    }
    else{
      return <Movies movies={this.state.movies}/>
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" >MOVIE SEARCH</h1>
        </header>
        <div className="the-form">
        <Form  getMovie={this.getMovie}/>
        <div className="the-results">
        
        



        {/* Rendering the movies if any
         */}
        {

          this.renderList(this.state.movies)
        }

        
        </div>
        </div>
      </div>
    );
  }
}

export default App;
