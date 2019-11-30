import React, { Component } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import Class from "classnames";

import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";

import "./SamplePlayer.scss";

export class SamplePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressBar: 0,
      showAudioPlayer: true,
      isPlaying: false,
    };
    this.audioPlayer = new Audio(props.audioSource);
  }

  componentDidMount() {
    this.audioPlayer.addEventListener("canplaythrough", this.showAudioPlayer);
    this.audioPlayer.addEventListener("timeupdate", this.updateProgressBar);
    this.audioPlayer.addEventListener("ended", this.audioEnded);
  }

  componentWillUnmount() {
    this.audioPlayer.removeEventListener("canplaythrough", this.showAudioPlayer);
    this.audioPlayer.removeEventListener("timeupdate", this.updateProgressBar);
    this.audioPlayer.removeEventListener("ended", this.audioEnded);
  }

  showAudioPlayer = () => {
    this.setState(() => {
      return { showAudioPlayer: false };
    });
  };

  togglePlay = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  };

  playAudio = () => {
    this.audioPlayer.play().then(() => {
      this.setState(() => {
        return { isPlaying: true };
      });
    });
  };

  pauseAudio = () => {
    this.audioPlayer.pause();
    this.setState(() => {
      return { isPlaying: false };
    });
  };

  audioEnded = () => {
    this.setState(() => {
      return { isPlaying: false };
    });
  };

  updateProgressBar = () => {
    const { duration, currentTime } = this.audioPlayer;
    const progress = (currentTime * 100) / duration / 100;

    this.setState(() => {
      return { progressBar: progress.toFixed(2) };
    });
  };

  render() {
    const { showAudioPlayer, progressBar, isPlaying } = this.state;

    return (
      <div
        className={Class("Sample__Player", { "Sample__Player--Loading": showAudioPlayer })}
        key={uuidv4()}>
        <ProgressBar progressBar={progressBar} isPlaying={isPlaying} />
        <Controls isPlaying={isPlaying} togglePlay={this.togglePlay} />
      </div>
    );
  }
}

SamplePlayer.defaultProps = {
  audioSource: "",
};

SamplePlayer.propTypes = {
  audioSource: PropTypes.string,
};
