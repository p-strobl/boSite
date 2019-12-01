import React, { Component } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import Class from "classnames";

import { Title } from "./Title";
import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";

import "./SamplePlayer.scss";

export class SamplePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      paused: false,
      progressBar: 0,
      showAudioPlayer: false,
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
    this.audioPlayer.load();

    this.setState(() => {
      return { showAudioPlayer: true };
    });
  };

  togglePlay = () => {
    const { isPlaying } = this.state;

    isPlaying ? this.pauseAudio() : this.playAudio();
  };

  playAudio = () => {
    this.audioPlayer.play();

    this.setState(() => {
      return { isPlaying: true, paused: false };
    });
  };

  pauseAudio = () => {
    this.audioPlayer.pause();

    this.setState(() => {
      return { isPlaying: false, paused: true };
    });
  };

  audioEnded = () => {
    this.setState(() => {
      return { isPlaying: false, paused: false };
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
    const { showAudioPlayer, progressBar, isPlaying, paused } = this.state;
    const { title } = this.props;

    return (
      <div
        className={Class("Sample__Player", { "Sample__Player--Loaded": showAudioPlayer })}
        key={uuidv4()}>
        <Title title={title} />
        <ProgressBar progressBar={progressBar} isPlaying={isPlaying} paused={paused} />
        <Controls isPlaying={isPlaying} togglePlay={this.togglePlay} />
      </div>
    );
  }
}

SamplePlayer.defaultProps = {
  audioSource: "",
  title: "",
};

SamplePlayer.propTypes = {
  audioSource: PropTypes.string,
  title: PropTypes.string,
};
