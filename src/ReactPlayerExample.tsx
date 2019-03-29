import * as React from 'react';
import {Component} from 'react';
import ReactPlayer from 'react-player';

import {MyPlayerProps} from './App';

export class ReactPlayerExample extends Component<MyPlayerProps> {
  componentDidUpdate(prevProps: Readonly<MyPlayerProps>, prevState: Readonly<{}>, snapshot?: any): void {
    this.props.onMessage('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps: Readonly<MyPlayerProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    const {isMuted, isPlaying, url, volume} = nextProps;

    if (this.props.url !== url) {
      const canPlay = ReactPlayer.canPlay(url || '');
      this.props.onMessage(`shouldComponentUpdate canPlay=${canPlay} url=${url}`);
    }

    // because componentDidUpdate change state of parent component
    return (
      this.props.isMuted !== isMuted ||
      this.props.isPlaying !== isPlaying ||
      this.props.url !== url ||
      this.props.volume !== volume
    );
  }

  render() {
    const {isMuted, isPlaying, url, volume, onMessage} = this.props;

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
            onMessage('onReady');
          }}
          onStart={() => {
            onMessage('onStart');
          }}
          onPlay={() => {
            onMessage('onPlay');
          }}
          onProgress={e => {
            onMessage('onProgress' + JSON.stringify(e));
          }}
          onDuration={e => {
            onMessage('onDuration' + JSON.stringify(e));
          }}
          onPause={() => {
            onMessage('onPause');
          }}
          onBuffer={() => {
            onMessage('onBuffer');
          }}
          onEnded={() => {
            onMessage('onEnded');
          }}
          onError={e => {
            onMessage('onError' + JSON.stringify(e));
          }}
          onEnablePIP={() => {
            onMessage('onEnablePIP');
          }}
          onDisablePIP={() => {
            onMessage('onDisablePIP');
          }}
          config={{file: {forceAudio: true}}}
        />
      </div>
    );
  }
}
