import React, {Component} from 'react';
import {MyPlayerProps} from './App';

interface State {
  audio: HTMLAudioElement | null;
}

export class AudioExample extends Component<MyPlayerProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      audio: null
    };
  }

  render() {
    const {isMuted, isPlaying, url, volume} = this.props;
    const {audio} = this.state;

    return (
      <div>
        <h1>AudioExample</h1>
        <audio
          src={url}
          ref={audio => {
            if (this.state.audio === null) {
              this.setState({audio: audio});
            }
          }}
        />
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step=".05"
            value={volume}
            onChange={e => {
              if (audio) {
                audio.volume = Number(e.target.value);
              }
            }}
            style={{verticalAlign: 'bottom'}}
          />
          {volume}
        </label>
        canPlayType: {audio ? audio.canPlayType(url !== undefined ? url : '') : 'audio is null'}
        <br/>
        <button
          onClick={() => {
            if (audio) {
              audio.play();
            }
          }}>
          Play
        </button>
        <button
          onClick={() => {
            if (audio) {
              audio.muted = !audio.muted;
            }
          }}>
          Mute
        </button>
        <button
          onClick={() => {
            if (audio) {
              audio.pause();
            }
          }}>
          Pause
        </button>
      </div>
    );
  }
}
