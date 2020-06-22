import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import { Title } from "./Title";
import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";
import { TimeDuration } from "./TimeDuration";

import "./Player.scss";

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioDuration: "0.0",
      currentTime: "0.0",
      isPlaying: false,
      isLoading: false,
      paused: false,
      progressBar: 0,
    };

    this.uiClasses = {
      samplePlayer: "Sample__Player",
      samplePlayerLoaded: "Sample__Player--Loaded",
    };

    this.audioPlayer = new Audio();
  }

  componentWillUnmount() {
    this.audioPlayer.removeEventListener("canplaythrough", this.showAudioTimer);
    this.audioPlayer.removeEventListener("timeupdate", this.updateProgressBar);
    this.audioPlayer.removeEventListener("ended", this.audioEnded);
  }

  initAudioPlayerEvents = () => {
    this.audioPlayer.addEventListener("canplaythrough", this.showAudioTimer);
    this.audioPlayer.addEventListener("timeupdate", this.updateProgressBar);
    this.audioPlayer.addEventListener("ended", this.audioEnded);
  };

  toggleLoading = () => {
    const { isLoading } = this.state;

    this.setState(() => {
      return { isLoading: !isLoading };
    });
  };

  initAudioSource = () => {
    const { audioSource } = this.props;

    this.toggleLoading();

    this.audioPlayer = new Audio(audioSource);
    this.audioPlayer.load();

    this.initAudioPlayerEvents();
  };

  showAudioTimer = () => {
    this.toggleLoading();
    console.log("playthrough");
    this.setState(() => {
      return {
        audioDuration: this.audioPlayer.duration.toFixed(1),
        currentTime: this.audioPlayer.currentTime.toFixed(1),
      };
    });
  };

  togglePlay = () => {
    const { isPlaying } = this.state;

    isPlaying ? this.pauseAudio() : this.playAudio();
  };

  playAudio = () => {
    const audioPlayerHasSource = this.audioPlayer.hasAttribute("src");

    if (!audioPlayerHasSource) {
      this.initAudioSource();
    }

    this.audioPlayer.play().then(() => {
      this.setState(() => {
        return { isPlaying: true, paused: false };
      });
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
      return {
        currentTime: "0.0",
        isPlaying: false,
        paused: false,
      };
    });
  };

  updateProgressBar = () => {
    const { duration, currentTime } = this.audioPlayer;
    const progress = (currentTime * 100) / duration / 100;

    this.setState(() => {
      return {
        currentTime: this.audioPlayer.currentTime.toFixed(1),
        progressBar: progress.toFixed(2),
      };
    });
  };

  render() {
    const { currentTime, audioDuration, isPlaying, isLoading, paused, progressBar } = this.state;
    const { title } = this.props;

    return (
      <div className={this.uiClasses.samplePlayer} key={uuid()}>
        <Title title={title} />
        <TimeDuration audioDuration={audioDuration} currentTime={currentTime} />
        <Controls isPlaying={isPlaying} isLoading={isLoading} togglePlay={this.togglePlay} />
        <ProgressBar progressBar={progressBar} isPlaying={isPlaying} paused={paused} />
      </div>
    );
  }
}

Player.defaultProps = {
  audioSource: "",
  title: "",
};

Player.propTypes = {
  audioSource: PropTypes.string,
  title: PropTypes.string,
};
