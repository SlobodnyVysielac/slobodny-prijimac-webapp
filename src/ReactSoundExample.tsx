import * as React from 'react';
import {Component} from 'react';
import {StreamOption} from './App';
import ReactSound from 'react-sound';

interface Props {
  streamToUrl: Map<StreamOption, string>;
}

interface State {
  isMuted: boolean;
  isPlaying: boolean;
  seek: number;
  selectedOption: StreamOption;
  volume: number;
}

export default class ReactSoundExample extends Component<Props, State> {
  public state = {
    isMuted: false,
    isPlaying: false,
    seek: 0.0, // SVARGA seek
    selectedOption: StreamOption.aacQ24,
    volume: 100
  };

  render() {
    const {streamToUrl} = this.props;
    const {isMuted, isPlaying, selectedOption, volume, seek} = this.state;
    // SVARGA sometimes do not work, throw Error without stacktrace
    return (
      <div>
        <ReactSound
          url={streamToUrl.get(selectedOption) || ''}
          playStatus={isPlaying ? ReactSound.status.PLAYING : ReactSound.status.PAUSED}
          volume={isMuted ? 0 : volume}
          onError={(errorCode, description) => {
            // SVARGA remove console.log
            console.error(`SVARGA: ${errorCode} desc:${description}`);
          }}
        />

        <code>
          <small>
            {selectedOption} <br />
            {streamToUrl.get(selectedOption)} <br />
            <br />
            isMuted: {isMuted + ''} <br />
            isPlaying: {isPlaying + ''} <br />
            volume: {volume + ''} <br />
            Seek: {seek.toFixed(2)} <br />
          </small>
        </code>

        <div>
          <label>
            <input
              type="radio"
              value={StreamOption.aacQ24}
              checked={selectedOption === StreamOption.aacQ24}
              onChange={() => this.setState({selectedOption: StreamOption.aacQ24})}
            />
            AAC 24 kbps
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value={StreamOption.aacQ56}
              checked={selectedOption === StreamOption.aacQ56}
              onChange={() => this.setState({selectedOption: StreamOption.aacQ56})}
            />
            AAC 56 kbps
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value={StreamOption.mp3Q128}
              checked={selectedOption === StreamOption.mp3Q128}
              onChange={() => this.setState({selectedOption: StreamOption.mp3Q128})}
            />
            MP3 128kbps
          </label>
        </div>

        <button type="button" onClick={() => this.setState(prevState => ({isPlaying: !prevState.isPlaying}))}>
          {isPlaying ? 'Stop' : 'Play'}
        </button>

        <button type="button" onClick={() => this.setState(prevState => ({isMuted: !prevState.isMuted}))}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>

        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="100"
            step=".5"
            value={this.state.volume}
            onChange={e => this.setState({volume: parseFloat(e.target.value)})}
            style={{verticalAlign: 'bottom'}}
          />
          {this.state.volume.toFixed(2)}
        </label>
      </div>
    );
  }
}
