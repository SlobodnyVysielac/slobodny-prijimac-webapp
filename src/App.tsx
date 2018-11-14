import React, {Component} from 'react';
import * as ReactHowler from 'react-howler';

interface State {
  isMuted: boolean;
  isPlaying: boolean;
  seek: number;
  selectedOption: StreamOption;
  volume: number;
}

export default class App extends Component<{}, State> {
  public state = {
    isMuted: false,
    isPlaying: false,
    seek: 0.0, // SVARGA seek
    selectedOption: StreamOption.aacQ24,
    volume: 1.0
  };

  render() {
    const {isMuted, isPlaying, selectedOption, volume, seek} = this.state;

    return (
      <div>
        <ReactHowler
          src={streamUrl.get(selectedOption)}
          html5={true}
          mute={isMuted}
          playing={isPlaying}
          volume={volume}
          onStop={() => {
            console.log('onStop');
          }}
          onPause={() => {
            console.log('onPause');
          }}
        />

        <code>
          <small>
            {selectedOption} <br />
            {streamUrl.get(selectedOption)} <br />
            <br />
            isMuted: {isMuted + ''} <br />
            isPlaying: {isPlaying + ''} <br />
            volume: {volume + ''} <br />
            Seek: {seek.toFixed(2)} <br />
          </small>
        </code>
        <br />

        <form onSubmit={() => undefined}>
          <button type="button" onClick={() => this.setState(prevState => ({isPlaying: !prevState.isPlaying}))}>
            {isPlaying ? 'Stop' : 'Play'}
          </button>

          <button type="button" onClick={() => this.setState(prevState => ({isMuted: !prevState.isMuted}))}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>

          <div>
            <label>
              Volume:
              <input
                type="range"
                min="0"
                max="1"
                step=".05"
                value={this.state.volume}
                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                style={{verticalAlign: 'bottom'}}
              />
              {this.state.volume.toFixed(2)}
            </label>
          </div>

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
          <div className="radio">
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
          <div className="radio">
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
        </form>
      </div>
    );
  }
}

enum StreamOption {
  aacQ24 = 'aacQ24',
  aacQ56 = 'aacQ56',
  mp3Q128 = 'mp3Q128'
}

const streamUrl = new Map<StreamOption, string>([
  [StreamOption.aacQ24, 'http://78.47.79.190:8006/stream'],
  [StreamOption.aacQ56, 'http://78.47.79.190:8002/stream'],
  [StreamOption.mp3Q128, 'http://78.47.79.190:8004/stream']
]);
