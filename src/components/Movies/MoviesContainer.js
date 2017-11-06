import React, { Component } from 'react'

export default class MoviesContainer extends Component {
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <p>Hi</p>
    )
  }
}
