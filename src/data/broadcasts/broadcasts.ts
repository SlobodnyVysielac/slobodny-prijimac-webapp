import SeTonovPreZivotStevenTylerPng from './7-tonov-pre-zivot-steven-tyler.png';
import AtlasMrakuMaxJpg from './src/data/broadcasts/atlas-mraku-max.jpg';
import HodinaVlka129Png from './hodina-vlka-129.png';
import Opony247Png from './opony-247.png';
import RanneSpravyPng from './ranne-spravy.png';
import VPrvejLinii29032019Jpg from './v-prvej-linii-29-03-2019.jpg';
import VPrvejLinii30032019Jpg from './v-prvej-linii-30-03-2019.jpg';

export enum BroadcastType {
  Live = 'Naživo',
  Music = 'Hudba',
  None = '',
  RadioPlay = 'Rozhlasová hra',
  Replay = 'Repríza'
}

export interface Broadcast {
  readonly title: string;
  readonly type: BroadcastType;
  readonly imgSrc: string;
  readonly timeStart: string;
  readonly timeEnd: string;
}

const data: ReadonlyArray<Broadcast> = [
  {
    title: 'Opony 247',
    type: BroadcastType.Live,
    imgSrc: Opony247Png,
    timeStart: '18:30',
    timeEnd: '19:30'
  },
  {
    title: 'Ranné správy',
    type: BroadcastType.None,
    imgSrc: RanneSpravyPng,
    timeStart: '19:30',
    timeEnd: '19:50'
  },
  {
    title: 'V prvej línii',
    type: BroadcastType.Live,
    imgSrc: VPrvejLinii29032019Jpg,
    timeStart: '20:30',
    timeEnd: '21:30'
  },
  {
    title: 'V prvej línii',
    type: BroadcastType.Replay,
    imgSrc: VPrvejLinii30032019Jpg,
    timeStart: '20:00',
    timeEnd: '21:00'
  },
  {
    title: 'Hodina Vlka 129',
    type: BroadcastType.Live,
    imgSrc: HodinaVlka129Png,
    timeStart: '21:30',
    timeEnd: '22:30'
  },
  {
    title: '7 tónov pre život…Steven Tyler',
    type: BroadcastType.Music,
    imgSrc: SeTonovPreZivotStevenTylerPng,
    timeStart: '14:30',
    timeEnd: '15:00'
  },
  {
    title: 'Rozhlasová hra (príbehy, ktoré nestarnú)',
    type: BroadcastType.RadioPlay,
    imgSrc: AtlasMrakuMaxJpg,
    timeStart: '21:30',
    timeEnd: '23:59'
  }
];

export default data;
