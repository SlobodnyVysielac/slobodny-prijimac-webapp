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
    onLoading?: () => void;
    onLoad?: () => void;
    onPlaying?: () => void;
    onPause?: () => void;
    onResume?: () => void;
    onStop?: () => void;
    onFinishedPlaying?: () => void;
    onBufferChange?: () => void;
  }

  interface MyReactSound extends React.ComponentClass<ReactSoundProps> {
    status: {
      readonly PLAYING: PlayStatus.PLAYING;
      readonly STOPPED: PlayStatus.STOPPED;
      readonly PAUSED: PlayStatus.PAUSED;
    };
  }

  // const ReactSound: React.ComponentClass<ReactSoundProps>;
  const ReactSound: MyReactSound;

  export default ReactSound;
}
