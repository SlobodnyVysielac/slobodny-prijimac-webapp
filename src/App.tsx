import React, {Component} from 'react';

import ReactHowlerExample from './ReactHowlerExample';
import ReactSoundExample from './ReactSoundExample';
import {ReactPlayerExample} from './ReactPlayerExample';
import {AudioExample} from './AudioExample';

enum Player {
  audio       = 'audio',
  reactHowler = 'react-howler',
  reactPlayer = 'react-player',
  reactSound  = 'react-sound'
}

export interface MyPlayerProps {
  isMuted: boolean;
  isPlaying: boolean;
  url: string | undefined;
  volume: number;
}

export enum StreamOption {
  aacQ24  = 'aacQ24',
  aacQ56  = 'aacQ56',
  mp3Q128 = 'mp3Q128'
}

export const streamToUrl = new Map<StreamOption, string>([
  [StreamOption.aacQ24, 'http://78.47.79.190:8006/stream'],
  [StreamOption.aacQ56, 'http://78.47.79.190:8002/stream'],
  [StreamOption.mp3Q128, 'http://78.47.79.190:8004/stream']
]);

interface State {
  isMuted: boolean;
  isPlaying: boolean;
  messages: string[];
  selectedPlayer: Player
  selectedStreamOption: StreamOption;
  volume: number;
}

const APP_DEFAULT_STATE: State = {
  isMuted             : false,
  isPlaying           : false,
  messages            : ['\ta', 'b'],
  selectedPlayer      : Player.reactPlayer,
  selectedStreamOption: StreamOption.aacQ24,
  volume              : .5
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

  render() {
    return (
      <div>
        {this.renderStateInfo()}
        <hr/>

        {this.renderControls()}
        <hr/>

        {this.renderPlayersRadios()}
        <hr/>

        {this.renderHtml5Audios()}
        <hr/>

        {this.renderSelectedPlayer()}
        <hr/>

        {this.renderMessages()}
      </div>
    );
  }

  private renderStateInfo() {
    const {isMuted, isPlaying, selectedPlayer, selectedStreamOption, volume} = this.state;

    return (
      <code>
        <small>
          Player: {selectedPlayer}<br/>
          Url: {selectedStreamOption}: {streamToUrl.get(selectedStreamOption)}<br/>
          isPlaying: {isPlaying + ''} <br/>
          isMuted: {isMuted + ''} <br/>
          volume: {volume + ''}
        </small>
      </code>
    );
  }

  private renderControls() {
    const {isMuted, isPlaying, selectedStreamOption, volume} = this.state;

    return (
      <div>

        <div>
          <label>
            <input
              type="radio"
              value={StreamOption.aacQ24}
              checked={selectedStreamOption === StreamOption.aacQ24}
              onChange={() => this.setState({selectedStreamOption: StreamOption.aacQ24})}
            />
            AAC 24 kbps
          </label>
          <label>
            <input
              type="radio"
              value={StreamOption.aacQ56}
              checked={selectedStreamOption === StreamOption.aacQ56}
              onChange={() => this.setState({selectedStreamOption: StreamOption.aacQ56})}
            />
            AAC 56 kbps
          </label>
          <label>
            <input
              type="radio"
              value={StreamOption.mp3Q128}
              checked={selectedStreamOption === StreamOption.mp3Q128}
              onChange={() => this.setState({selectedStreamOption: StreamOption.mp3Q128})}
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

  private renderHtml5Audios() {
    return (
      <div>
        <div>html5 audio</div>
        <span>{StreamOption.aacQ24}</span>
        <audio src={streamToUrl.get(StreamOption.aacQ24)} controls/>
        <br/>
        <span>{StreamOption.aacQ56}</span>
        <audio src={streamToUrl.get(StreamOption.aacQ56)} controls/>
        <br/>
        <span>{StreamOption.mp3Q128}</span>
        <audio src={streamToUrl.get(StreamOption.mp3Q128)} controls/>
      </div>
    );
  }

  private renderSelectedPlayer() {
    const {isMuted, isPlaying, selectedPlayer, selectedStreamOption, volume} = this.state;

    switch (selectedPlayer) {
      case Player.audio:
        return (<AudioExample
          isMuted={isMuted}
          isPlaying={isPlaying}
          url={streamToUrl.get(selectedStreamOption)}
          volume={volume}
        />);

      case Player.reactHowler:
        return (<ReactHowlerExample
          isMuted={isMuted}
          isPlaying={isPlaying}
          url={streamToUrl.get(selectedStreamOption)}
          volume={volume}
        />);

      case Player.reactPlayer:
        return (<ReactPlayerExample
          isMuted={isMuted}
          isPlaying={isPlaying}
          url={streamToUrl.get(selectedStreamOption)}
          volume={volume}
        />);

      case Player.reactSound:
        return (<ReactSoundExample
          isMuted={isMuted}
          isPlaying={isPlaying}
          url={streamToUrl.get(selectedStreamOption)}
          volume={volume}
        />);

      default:
        return (<div>not implemented!</div>);
    }
  }

  private renderMessages() {
    return (
      <div>
        <button onClick={() => this.setState({messages: []})}>Clear console</button>
        <br/>
        <code>
          <small>
            {this.state.messages.map((m, i) => <div key={i}>{m}</div>)}
          </small>
        </code>
      </div>
    );
  }
}
