import React, { Component } from 'react'
import '../../index.css'

export default class MoviesContainer extends Component {

  state = {movies: []}


  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => this.setMovies(json))
  }

  setMovies(json) {
    this.setState({
      movies: json
    })
  }

  showMovies() {
    console.log(this.state.movies)
    return this.state.movies.map((movie) => {
      return (
        <div key={movie.title}>
          <div className="halfpage">
            <h3>{movie.title}</h3>
            <h6>{movie.release_date}</h6>
            <p>{movie.description}</p>
            <p>Rotten Tomatoes Score: {movie.rt_score}</p>
            <br />
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.showMovies()}
      </div>
    )
  }
}
