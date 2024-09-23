import avatar from '../assets/avatars/1.png';
import avatarBig from '../assets/avatars/1@2x.png';
import avatarSecond from '../assets/avatars/2.png';
import avatarSecondBig from '../assets/avatars/2@2x.png';
import SriLanka from '../assets/flags/SriLanka.png';
import SriLankaTwo from '../assets/flags/SriLanka@2x.png';
import Thailand from '../assets/flags/Thailand.png';
import ThailandTwo from '../assets/flags/Thailand@2x.png';
import Seychelles from '../assets/flags/Seychelles.png';
import SeychellesTwo from '../assets/flags/Seychelles@2x.png';
import { ReactComponent as LevelOneIcon } from '../assets/icons/level/99.svg';
import { ReactComponent as LevelTwoIcon } from '../assets/icons/level/80.svg';
import { ReactComponent as LevelThreeIcon } from '../assets/icons/level/50.svg';
import { ReactComponent as LevelFourIcon } from '../assets/icons/level/25.svg';

const svgMap = {
  level1: LevelOneIcon,
  level2: LevelTwoIcon,
  level3: LevelThreeIcon,
  level4: LevelFourIcon,
};

const travelCardData = {
  picture: {
    imagePath: avatar,
    imageSecondPath: avatarBig,
    imageWidth: 285,
    imageHeight: 285,
    imageAltText: 'Аватар пользователя',
  },
  offlineStatus: true,
  name: 'Таня Фирсова',
  tags: '#ЗОЖ #ПП #Фитнес #пляж  #авокадо #смузи',
  follow: false,
  followCounter: 0,
  transport: {
    plane: true,
    bus: false,
    run: false,
    bicycle: false,
  },
  countriesList: [
    {
      picture: {
        imagePath: SriLanka,
        imageSecondPath: SriLankaTwo,
        imageWidth: 35,
        imageHeight: 24,
        imageAltText: 'Флаг страны',
      },
      name: 'Шри-Ланка',
    },
    {
      picture: {
        imagePath: Thailand,
        imageSecondPath: ThailandTwo,
        imageWidth: 35,
        imageHeight: 24,
        imageAltText: 'Флаг страны',
      },
      name: 'Таиланд',
    },
    {
      picture: {
        imagePath: Seychelles,
        imageSecondPath: SeychellesTwo,
        imageWidth: 35,
        imageHeight: 24,
        imageAltText: 'Флаг страны',
      },
      name: 'Сейшелы',
    },
  ],
  levelCounter: 99,
  level: {
    svg: svgMap.level1,
    imageWidth: 60,
    imageHeight: 60,
    circleClass: 'full', // Для значение от 0 до 90 - quarer, 90-180 - half, > 180 - full
  }
};

const secondTravelCardData = {
  picture: {
    imagePath: avatarSecond,
    imageSecondPath: avatarSecondBig,
    imageWidth: 285,
    imageHeight: 285,
    imageAltText: 'Аватар пользователя',
  },
  offlineStatus: true,
  name: 'Петя Демин',
  tags: '#бургер #бар #футбол #концерт #крафт',
  follow: true,
  followCounter: 1500,
  transport: {
    plane: true,
    bus: true,
    run: true,
    bicycle: false,
  },
  countriesList: [
    {
      picture: {
        imagePath: SriLanka,
        imageSecondPath: SriLankaTwo,
        imageWidth: 35,
        imageHeight: 24,
        imageAltText: 'Флаг страны',
      },
      name: 'Бельгия',
    },
    {
      picture: {
        imagePath: Thailand,
        imageSecondPath: ThailandTwo,
        imageWidth: 35,
        imageHeight: 24,
        imageAltText: 'Флаг страны',
      },
      name: 'Чехия',
    },
  ],
  levelCounter: 80,
  level: {
    svg: svgMap.level2,
    imageWidth: 60,
    imageHeight: 60,
    circleClass: 'full',
  }
};

export {travelCardData, secondTravelCardData};