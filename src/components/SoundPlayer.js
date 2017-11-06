import React, { Component } from 'react'

export default class SoundPlayer extends Component {
  constructor(props) {
    super(props)
    this.myAudio = new Audio('../OneSummersDay.mp3')
  }

  playNote() {
    this.myAudio.play()
  }

  render() {
    return (
      <div>
        {this.playNote()}
      </div>
    )
  }
}
