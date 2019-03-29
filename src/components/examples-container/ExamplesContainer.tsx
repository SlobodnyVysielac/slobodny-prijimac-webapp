import StreamData, {Stream} from '../../data/streams';
import * as React from 'react';
import {NativeAudioWrapper} from './players/NativeAudioWrapper';
import {ReactPlayerWrapper} from './players/ReactPlayerWrapper';
import ReactSoundWrapper from './players/ReactSoundWrapper';
import ReactHowlerWrapper from './players/ReactHowlerWrapper';

enum Player {
  NativeAudio = 'native audio',
  ReactHowler = 'react-howler',
  ReactPlayer = 'react-player',
  ReactSound = 'react-sound'
}

export interface PlayerProps {
  isMuted: boolean;
  isPlaying: boolean;
  url: string | undefined;
  volume: number;
  onMessage: (msg: string) => void;
}

interface State {
  isMuted: boolean;
  isPlaying: boolean;
  messages: string[];
  selectedPlayer: Player;
  selectedStream: Stream;
  volume: number;
}

const APP_DEFAULT_STATE: State = {
  isMuted: false,
  isPlaying: false,
  messages: [],
  selectedPlayer: Player.ReactSound,
  selectedStream: StreamData[0],
  volume: 0.5
};

class ExamplesContainer extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = APP_DEFAULT_STATE;
  }

  private handleSelectedPlayerChange = (player: Player) => {
    this.setState({
      ...APP_DEFAULT_STATE,
      selectedPlayer: player
    });
  };

  private handleMessage = (msg: string) => {
    this.setState(prevState => {
      return {messages: prevState.messages.concat([msg])};
    });
  };

  render() {
    const {selectedStream} = this.state;

    return (
      <div>
        {this.renderStatus()}
        <hr />

        <audio src={`${selectedStream.url}/start`} controls />
        <hr />

        {this.renderController()}
        <hr />

        {this.renderRadiosGroup()}
        <hr />

        {this.renderSelectedPlayer()}
        <hr />

        {this.renderMessages()}
      </div>
    );
  }

  private renderStatus = () => {
    const {isMuted, isPlaying, selectedPlayer, selectedStream, volume} = this.state;

    return (
      <code>
        <small>
          Player: {selectedPlayer}
          <br />
          Stream: {`${selectedStream.type} ${selectedStream.bps / 1000}: ${selectedStream.url}`}
          <br />
          isPlaying: {isPlaying + ''} <br />
          isMuted: {isMuted + ''} <br />
          volume: {volume + ''}
        </small>
      </code>
    );
  };

  private renderController = () => {
    const {isMuted, isPlaying, selectedStream, volume} = this.state;

    return (
      <div>
        <div>
          {StreamData.map((stream, index) => (
            <label key={index}>
              <input
                type="radio"
                value={`${stream.type} ${stream.bps / 1000}`}
                checked={stream === selectedStream}
                onChange={() => this.setState({selectedStream: stream})}
              />
              {`${stream.type} ${stream.bps / 1000}`}&nbsp;kbps
            </label>
          ))}
        </div>

        <button onClick={() => this.setState(prevState => ({isPlaying: !prevState.isPlaying}))}>
          {isPlaying ? 'Stop' : 'Play'}
        </button>
        <button onClick={() => this.setState(prevState => ({isMuted: !prevState.isMuted}))}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step=".05"
            value={volume}
            onChange={e => this.setState({volume: parseFloat(e.target.value)})}
            style={{verticalAlign: 'bottom'}}
          />
          {volume}
        </label>
        <br />
      </div>
    );
  };

  private renderRadiosGroup = () => {
    const {selectedPlayer} = this.state;

    return (
      <div>
        <div>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.NativeAudio}
              onChange={() => this.handleSelectedPlayerChange(Player.NativeAudio)}
            />
            {Player.NativeAudio}
          </label>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.ReactHowler}
              onChange={() => this.handleSelectedPlayerChange(Player.ReactHowler)}
            />
            {Player.ReactHowler}
          </label>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.ReactPlayer}
              onChange={() => this.handleSelectedPlayerChange(Player.ReactPlayer)}
            />
            {Player.ReactPlayer}
          </label>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.ReactSound}
              onChange={() => this.handleSelectedPlayerChange(Player.ReactSound)}
            />
            {Player.ReactSound}
          </label>
        </div>
      </div>
    );
  };

  private renderSelectedPlayer = () => {
    const {isMuted, isPlaying, selectedPlayer, selectedStream, volume} = this.state;

    switch (selectedPlayer) {
      case Player.NativeAudio:
        return (
          <NativeAudioWrapper
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={this.handleMessage}
          />
        );

      case Player.ReactHowler:
        return (
          <ReactHowlerWrapper
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={this.handleMessage}
          />
        );

      case Player.ReactPlayer:
        return (
          <ReactPlayerWrapper
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={this.handleMessage}
          />
        );

      case Player.ReactSound:
        return (
          <ReactSoundWrapper
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={this.handleMessage}
          />
        );

      default:
        return <div>not implemented!</div>;
    }
  };

  private renderMessages = () => (
    <div>
      <button onClick={() => this.setState({messages: []})} style={{width: '8em', height: '8em'}}>
        Clear console
      </button>
      <br />
      <code>
        <small>
          {this.state.messages.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </small>
      </code>
    </div>
  );
}

export default ExamplesContainer;
