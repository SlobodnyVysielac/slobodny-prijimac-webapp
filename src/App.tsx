import React, {Component} from 'react';
import ReactHowlerExample from './ReactHowlerExample';
import {AudioExample} from './AudioExample';
import ReactSoundExample from './ReactSoundExample';
import {ReactPlayerExample} from './ReactPlayerExample';
import StreamData, {Stream} from './data/streams';

enum Player {
  audio = 'native audio',
  reactHowler = 'react-howler',
  reactPlayer = 'react-player',
  reactSound = 'react-sound'
}

export interface MyPlayerProps {
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
  selectedPlayer: Player.reactSound,
  selectedStream: StreamData[0],
  volume: 0.5
};

export default class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = APP_DEFAULT_STATE;
  }

  private onChangeSelectedPlayer = (player: Player) => {
    this.setState({
      ...APP_DEFAULT_STATE,
      selectedPlayer: player
    });
  };

  private onMessage = (msg: string) => {
    this.setState(prevState => {
      return {messages: prevState.messages.concat([msg])};
    });
  };

  render() {
    return (
      <div>
        {this.renderStateInfo()}
        <hr/>

        {this.renderHtml5Audio()}
        <hr/>

        {this.renderControls()}
        <hr/>

        {this.renderPlayersRadios()}
        <hr/>

        {this.renderSelectedPlayer()}
        <hr/>

        {this.renderMessages()}
      </div>
    );
  }

  private renderStateInfo() {
    const {isMuted, isPlaying, selectedPlayer, selectedStream, volume} = this.state;

    return (
      <code>
        <small>
          Player: {selectedPlayer}
          <br/>
          Stream: {`${selectedStream.type} ${selectedStream.bps / 1000}: ${selectedStream.url}`}
          <br/>
          isPlaying: {isPlaying + ''} <br/>
          isMuted: {isMuted + ''} <br/>
          volume: {volume + ''}
        </small>
      </code>
    );
  }

  private renderControls() {
    const {isMuted, isPlaying, selectedStream, volume} = this.state;

    return (
      <div>
        <div>
          {StreamData.map((stream, index) => (
            <label key={index}>
              {/*// SVARGA set value*/}
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
        <br/>
      </div>
    );
  }

  private renderPlayersRadios() {
    const {selectedPlayer} = this.state;

    return (
      <div>
        <div>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.audio}
              onChange={() => this.onChangeSelectedPlayer(Player.audio)}
            />
            {Player.audio}
          </label>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.reactHowler}
              onChange={() => this.onChangeSelectedPlayer(Player.reactHowler)}
            />
            {Player.reactHowler}
          </label>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.reactPlayer}
              onChange={() => this.onChangeSelectedPlayer(Player.reactPlayer)}
            />
            {Player.reactPlayer}
          </label>
          <label>
            <input
              type="radio"
              checked={selectedPlayer === Player.reactSound}
              onChange={() => this.onChangeSelectedPlayer(Player.reactSound)}
            />
            {Player.reactSound}
          </label>
        </div>
      </div>
    );
  }

  private renderHtml5Audio() {
    const {selectedStream} = this.state;

    return <audio src={`${selectedStream.url}/start`} controls/>;
  }

  private renderSelectedPlayer() {
    const {isMuted, isPlaying, selectedPlayer, selectedStream, volume} = this.state;

    switch (selectedPlayer) {
      case Player.audio:
        return (
          <AudioExample
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={msg => this.onMessage(msg)}
          />
        );

      case Player.reactHowler:
        return (
          <ReactHowlerExample
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={msg => this.onMessage(msg)}
          />
        );

      case Player.reactPlayer:
        return (
          <ReactPlayerExample
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={msg => this.onMessage(msg)}
          />
        );

      case Player.reactSound:
        return (
          <ReactSoundExample
            isMuted={isMuted}
            isPlaying={isPlaying}
            url={`${selectedStream.url}/start`}
            volume={volume}
            onMessage={msg => this.onMessage(msg)}
          />
        );

      default:
        return <div>not implemented!</div>;
    }
  }

  private renderMessages() {
    return (
      <div>
        <button onClick={() => this.setState({messages: []})} style={{width: '8em', height: '8em'}}>
          Clear console
        </button>
        <br/>
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
}
