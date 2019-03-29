declare module 'react-sound' {
  import * as React from 'react';

  // export enum PlayStatus {
  //   Playing = 'PLAYING',
  //   Stopped = 'STOPPED',
  //   Paused = 'PAUSED'
  // }

  enum PlayStatus {
    PLAYING = 'PLAYING',
    STOPPED = 'STOPPED',
    PAUSED = 'PAUSED'
  }

  export interface ReactSoundProps {
    url: string;
    playStatus: PlayStatus;
    playFromPosition?: number;
    position?: number;
    volume?: number;
    playbackRate?: number;
    autoLoad?: boolean;
    loop?: boolean;
    onError?: (errorCode: any, description: any) => void;
    onLoading?: (o: {bytesLoaded: any; bytesTotal: any; duration: any}) => void;
    onLoad?: (o: {loaded: boolean}) => void;
    onPlaying?: (o: {position: any; duration: any}) => void;
    onPause?: (o: {position: any; duration: any}) => void;
    onResume?: (o: {position: any; duration: any}) => void;
    onStop?: (o: {position: any; duration: any}) => void;
    onFinishedPlaying?: () => void;
    onBufferChange?: (hasChanged: boolean) => void;
  }

  interface MyReactSound extends React.ComponentClass<ReactSoundProps> {
    status: {
      readonly PLAYING: PlayStatus.PLAYING;
      readonly STOPPED: PlayStatus.STOPPED;
      readonly PAUSED: PlayStatus.PAUSED;
    };
  }

  // const ReactSoundWrapper: React.ComponentClass<ReactSoundProps>;
  const ReactSound: MyReactSound;

  export default ReactSound;
}
