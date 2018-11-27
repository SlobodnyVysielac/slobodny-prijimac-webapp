import * as React from 'react';
import {Component} from 'react';
import ReactSound from 'react-sound';

import {MyPlayerProps} from './App';


export default class ReactSoundExample extends Component<MyPlayerProps> {

  render() {
    const {isMuted, isPlaying, url, volume} = this.props;

    const reactSoundVolume = volume * 100;

    return (
      <div>
        <h1>ReactSoundExample</h1>
        <ReactSound
          url={url !== undefined ? url : ''}
          playStatus={isPlaying ? ReactSound.status.PLAYING : ReactSound.status.PAUSED}
          volume={isMuted ? 0 : reactSoundVolume}
          onError={(errorCode, description) => {
            // SVARGA remove console.log
            console.error(`SVARGA: ${errorCode} desc:${description}`);
          }}
        />
      </div>
    );
  }
}
