import * as React from 'react';
import {Component} from 'react';
import ReactPlayer from 'react-player';

import {MyPlayerProps} from './App';

export class ReactPlayerExample extends Component<MyPlayerProps> {

  render() {
    const {isMuted, isPlaying, url, volume} = this.props;

    return (
      <div>
        <h1>ReactPlayerExample</h1>
        <ReactPlayer
          url={url}
          muted={isMuted}
          playing={isPlaying}
          volume={isMuted ? 0 : volume}

          style={{display: 'none'}}
          progressInterval={500}

          onReady={() => {
          }}
          onStart={() => {
          }}
          onPlay={() => {
          }}
          onProgress={(e) => {
          }}
          onDuration={(e) => {
          }}
          onPause={() => {
          }}
          onBuffer={() => {
          }}
          onEnded={() => {
          }}
          onError={(e) => {
          }}
          onEnablePIP={() => {
          }}
          onDisablePIP={() => {
          }}

          config={{file: {forceAudio: true}}}
        />
      </div>
    );
  }

}
