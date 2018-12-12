import * as React from 'react';
import {Component} from 'react';
import ReactSound from 'react-sound';

import {MyPlayerProps} from './App';


export default class ReactSoundExample extends Component<MyPlayerProps> {

  componentDidUpdate(prevProps: Readonly<MyPlayerProps>, prevState: Readonly<{}>, snapshot?: any): void {
    this.props.onMessage('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps: Readonly<MyPlayerProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    const {isMuted, isPlaying, url, volume} = nextProps;

    if (this.props.url !== url) {
      const soundManager   = (window as any).soundManager;
      const canPlay        = soundManager.canPlayURL(url);
      const canPlayMimeAAC = soundManager.canPlayMIME('audio/aac');
      const canPlayMimeMP3 = soundManager.canPlayMIME('audio/mpeg');
      this.props.onMessage(
        `shouldComponentUpdate canPlay=${canPlay}, url=${url}, canPlayMimeAAC=${canPlayMimeAAC}, canPlayMimeMP3=${canPlayMimeMP3}`);
    }

    // because componentDidUpdate change state of parent component
    return this.props.isMuted !== isMuted ||
      this.props.isPlaying !== isPlaying ||
      this.props.url !== url ||
      this.props.volume !== volume;
  }

  render() {
    const {isMuted, isPlaying, url, volume, onMessage} = this.props;

    const reactSoundVolume = volume * 100;

    return (
      <div>
        <h1>ReactSoundExample</h1>
        <ReactSound
          url={url !== undefined ? url : ''}
          playStatus={isPlaying ? ReactSound.status.PLAYING : ReactSound.status.PAUSED}
          volume={isMuted ? 0 : reactSoundVolume}
          onError={(errorCode, description) => {
            onMessage(`onError errorCode:${errorCode} desc:${description}`);
          }}
          onLoading={({bytesLoaded, bytesTotal, duration}) => {
            onMessage(`onLoading bytesLoaded:${bytesLoaded}, bytesTotal:${bytesTotal}, duration:${duration}`);
          }}
          onLoad={({loaded}) => {
            onMessage(`onLoad loaded:${loaded}`);
          }}
          onPlaying={({position, duration}) => {
            onMessage(`onPlaying position:${position}, duration:${duration}`);
          }}
          onPause={({position, duration}) => {
            onMessage(`onPause position:${position}, duration:${duration}`);
          }}
          onResume={({position, duration}) => {
            onMessage(`onResume position:${position}, duration:${duration}`);
          }}
          onStop={({position, duration}) => {
            onMessage(`onStop position:${position}, duration:${duration}`);
          }}
          onFinishedPlaying={() => {
            onMessage(`onFinishedPlaying`);
          }}
          onBufferChange={(hasChanged) => {
            onMessage(`onBufferChange hasChanged=${hasChanged}`);
          }}
        />
      </div>
    );
  }
}
