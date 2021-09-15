import React, { useState } from "react";

const AUDIOCLIPS = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

// Scrapped for now:
// const VolumeSlider = () => {
//   const [volume, setVolume] = useState(1);

//   return (
//     <div className="vol-container">
//       <input
//         className="vol-slider"
//         type="range"
//         min={0}
//         max={1}
//         step={0.01}
//         value={volume}
//         onChange={(event) => {
//           setVolume(event.target.valueAsNumber);
//         }}
//       />
//     </div>
//   );
// };

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "♫",
    };

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(clipId) {
    this.setState({
      display: "♫ " + clipId,
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div className="grid-container">
          <div id="display">
            <h1>{this.state.display}</h1>
          </div>
          {/* Scrapped for now: <VolumeSlider /> */}
          {/* Map over audio clip bank */}
          {AUDIOCLIPS.map((clip) => {
            return (
              <Pad
                key={clip.id}
                clip={clip}
                changeDisplay={this.changeDisplay}
              />
            );
          })}
          <div id="logo">
            <h1>drum-machine&trade;</h1>
          </div>
        </div>
      </div>
    );
  }
}

class Pad extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === this.props.clip.keyCode) {
      this.playAudio();
      // Focus keypress in order to change style with CSS
      document.getElementById(this.props.clip.id).focus();
    }
  }
  playAudio() {
    let audio = document.getElementById(this.props.clip.keyTrigger);
    audio.currentTime = 0;
    audio.volume = 0.5; // Set default volume to 50%
    audio.play();
    // Pass clip.id into changeDisplay method in parent component
    this.props.changeDisplay(this.props.clip.id);
  }

  render() {
    return (
      <div>
        <button
          className="drum-pad"
          id={this.props.clip.id}
          onClick={this.playAudio}
        >
          <audio
            className="clip"
            id={this.props.clip.keyTrigger}
            src={this.props.clip.url}
          ></audio>
          {this.props.clip.keyTrigger}
        </button>
      </div>
    );
  }
}

export default DrumMachine;
