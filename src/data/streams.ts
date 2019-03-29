export enum StreamType {
  AAC = 'AAC',
  MP3 = 'MP3'
}

export interface Stream {
  readonly url: string;
  readonly name: string;
  readonly type: StreamType;
  readonly bps: number;
}

const data: ReadonlyArray<Stream> = [
  {
    url: 'http://78.47.79.190:8006',
    name: 'Nízka',
    type: StreamType.AAC,
    bps: 24000
  },
  {
    url: 'http://78.47.79.190:8002',
    name: 'Normálna',
    type: StreamType.AAC,
    bps: 56000
  },
  {
    url: 'http://78.47.79.190:8004',
    name: 'Vysoká',
    type: StreamType.MP3,
    bps: 128000
  }
];

export default data;
