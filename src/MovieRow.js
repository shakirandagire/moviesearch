import React from 'react';

class MovieRow extends React.Component{
    render(){
        return(
            <table className="movie" key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="movie-scr" width="120" src={this.props.movie.moviesrc}/>
          </td>
          <td>
            {this.props.movie.title}
            <p>{this.props.movie.overview}</p>
          </td>
        </tr>
      </tbody>
    </table>
        )
    }
}

export default MovieRow;