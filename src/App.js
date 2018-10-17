import React, { Component } from 'react';
import './App.css';
import MovieRow from'./MovieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
    console.log("This is my initializer")

    this.performSearch("bear")
  }

  performSearch(searchTerm){
    console.log("Perform search")
    const urlString  = "https://api.themoviedb.org/3/search/movie?api_key=308d3fbbf7a81c6025464f4bb9362ffd&query="+ searchTerm;
    
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
        console.log("Fetched data yeey");
        const results = searchResults.results;
        
        var movieRows = []
        results.forEach((movie) =>{
          movie.moviesrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          console.log(movie.poster_src)
          const movieRow = <MovieRow key={movie.id} movie = {movie}/>
          movieRows.push(movieRow)

        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) =>{
        console.error("Failed to fetch the data")
      }
    })
  }

  searchChangeHandler(event){
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }



  render() {
    return (
      <div>
       <table className="titleBar">
         <tbody>
           <tr>
             <td>
               <img alt="app icon" width="50" src="cinema-512.png"/>
             </td>
             <td>
               <h1>MoviesDB searcher</h1>
               
             </td>
           </tr>
         </tbody>
       </table>

       <input className="search" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
       {this.state.rows}
  
      </div>
    );
  }
}

export default App;
