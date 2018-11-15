import React, {Component} from 'react';
import ReactHowlerExample from './ReactHowlerExample';
import ReactSoundExample from './ReactSoundExample';

export enum StreamOption {
  aacQ24 = 'aacQ24',
  aacQ56 = 'aacQ56',
  mp3Q128 = 'mp3Q128'
}

export const streamToUrl = new Map<StreamOption, string>([
  [StreamOption.aacQ24, 'http://78.47.79.190:8006/stream'],
  [StreamOption.aacQ56, 'http://78.47.79.190:8002/stream'],
  [StreamOption.mp3Q128, 'http://78.47.79.190:8004/stream']
]);

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>html5 audio</h2>
        <span>{StreamOption.aacQ24}</span>
        <br />
        <audio src={streamToUrl.get(StreamOption.aacQ24)} controls />
        <br />
        <span>{StreamOption.aacQ56}</span>
        <br />
        <audio src={streamToUrl.get(StreamOption.aacQ56)} controls />
        <br />
        <span>{StreamOption.mp3Q128}</span>
        <br />
        <audio src={streamToUrl.get(StreamOption.mp3Q128)} controls />
        <br />

        <h2>react-howler</h2>
        <ReactHowlerExample streamToUrl={streamToUrl} />

        <h2>react-sound</h2>
        <ReactSoundExample streamToUrl={streamToUrl} />
      </div>
    );
  }
}
