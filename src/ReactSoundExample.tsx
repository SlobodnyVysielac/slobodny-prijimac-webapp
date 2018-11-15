import * as React from 'react';
import {Component} from 'react';
import {StreamOption} from './App';
import ReactSound from 'react-sound';

interface Props {
  streamToUrl: Map<StreamOption, string>;
}

interface State {
  isMuted: boolean;
  isPlaying: boolean;
  seek: number;
  selectedOption: StreamOption;
  volume: number;
}

export default class ReactSoundExample extends Component<Props, State> {
  public state = {
    isMuted: false,
    isPlaying: false,
    seek: 0.0, // SVARGA seek
    selectedOption: StreamOption.aacQ24,
    volume: 1.0
  };

  render() {
    const {streamToUrl} = this.props;
    const {isMuted, isPlaying, selectedOption, volume, seek} = this.state;
    // SVARGA controlls
    // SVARGA sometimes do not work, throw Error without stacktrace
    return (
      <div>
        <ReactSound
          url={streamToUrl.get(selectedOption) || ''}
          playStatus={ReactSound.status.STOPPED}
          onError={(errorCode, description) => {
            // SVARGA remove console.log
            console.error(`SVARGA: ${errorCode} desc:${description}`);
          }}
        />
      </div>
    );
  }
}
