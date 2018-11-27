import React, {Component} from 'react';
import * as ReactHowler from 'react-howler';

import {MyPlayerProps} from './App';

export default class ReactHowlerExample extends Component<MyPlayerProps> {

  render() {
    const {isMuted, isPlaying, url, volume} = this.props;

    return (
      <div>
        <h1>ReactHowlerExample</h1>
        <ReactHowler
          src={url !== undefined ? url : ['']}
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
      </div>
    );
  }
}
