import React, {Component} from 'react';
import ReactHowlerExample from './ReactHowlerExample';

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
        <h2>react-howler</h2>
        <ReactHowlerExample streamToUrl={streamToUrl} />
      </div>
    );
  }
}
