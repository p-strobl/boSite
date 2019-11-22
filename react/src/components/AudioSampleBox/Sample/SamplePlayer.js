import React, { Component } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import Class from "classnames";

import "./SamplePlayer.scss";

export class SamplePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressBar: 0,
      hideControls: true,
      isPlaying: false,
    };
    this.audioPlayer = new Audio(props.audioSource);
  }

  componentDidMount() {
    this.audioPlayer.addEventListener("canplaythrough", this.showAudioPlayer);
    this.audioPlayer.addEventListener("timeupdate", this.updateProgressBar);
    this.audioPlayer.addEventListener("ended", this.audioEnded);
  }

  togglePlay = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.pauseAudio();
    } else {
      this.audioPlayer.play().then(() => {
        this.setState(() => {
          return { isPlaying: true };
        });
      });
    }
  };

  showAudioPlayer = () => {
    this.setState(() => {
      return { hideControls: false };
    });
  };

  pauseAudio = () => {
    this.audioPlayer.pause();
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

  audioEnded = () => {
    this.setState(() => {
      return { isPlaying: false };
    });
  };

  render() {
    const { hideControls, progressBar, isPlaying } = this.state;

    return (
      <div
        className={Class("Sample__Player", { "SamplePlayer--Loading": hideControls })}
        key={uuidv4()}>
        <div className="ProgressBar">
          <div
            className="ProgressBar--filler"
            style={{ transform: `scaleX(${progressBar})` }}
            key={uuidv4()}
          />
        </div>
        <div
          className={Class(
            `SamplePlayer__Control  SamplePlayer__Control--${isPlaying ? "Pause" : "Play"}`,
          )}
          role="button"
          onClick={this.togglePlay}
          onKeyUp={() => {}}
          tabIndex={0}
          aria-label="Play"
        />
      </div>
    );
  }
}

// export const SamplePlayer = ({ audioSource }) => {
//   const audioPlayer = new Audio(audioSource);
//
//   const [hideControls, setHideControls] = useState(true);
//   const [progressBar, setProgressBar] = useState(0);
//   const [playButtonState, setPlayButtonState] = useState("Play");
//
//   const showAudioPlayer = () => {
//     setHideControls(false);
//   };
//
//   const togglePlay = () => {
//     audioPlayer.play().then(() => {
//       setPlayButtonState("Pause");
//     });
//   };
//
//   audioPlayer.onended = () => {
//     setProgressBar(0);
//     // audioPlayer.currentTime = 0;
//     setPlayButtonState("Play");
//   };
//
//   audioPlayer.ontimeupdate = () => {
//     const { duration, currentTime } = audioPlayer;
//     const progress = (currentTime * 100) / duration / 100;
//     setProgressBar(progress.toFixed(2));
//   };
//
//   const initAudioPlayer = () => {
//     if (typeof audioPlayer === "undefined") return false;
//
//     audioPlayer.addEventListener("canplaythrough", showAudioPlayer);
//     return true;
//   };
//
//   useEffect(() => {
//     initAudioPlayer();
//
//     return () => {
//       audioPlayer.removeEventListener("canplaythrough", showAudioPlayer);
//     };
//   }, []);
//
//   return (
//     <div
//       className={Class("Sample__Player", { "SamplePlayer--Loading": hideControls })}
//       key={uuidv4()}>
//       <div className="ProgressBar">
//         <div
//           className="ProgressBar--filler"
//           style={{ transform: `scaleX(${progressBar})` }}
//           key={uuidv4()}
//         />
//       </div>
//       <div
//         className={Class(`SamplePlayer__Control SamplePlayer__Control--${playButtonState}`)}
//         role="button"
//         onClick={togglePlay}
//         onKeyUp={() => {}}
//         tabIndex={0}
//         aria-label="Play"
//       />
//     </div>
//   );
// };

SamplePlayer.defaultProps = {
  audioSource: PropTypes.string,
};

SamplePlayer.propTypes = {
  audioSource: PropTypes.string,
};
