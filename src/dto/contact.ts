export class Contact {
  id: number
  name: string;
  mail: string;
  photo: string;
  splash: string;
}

export const CONTACTS: Contact[] = [
  {
    id: 1,
    name: 'Lux',
    mail: 'lux@lol.com',
    photo: 'http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/Lux.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg'
  },
  {
    id: 2,
    name: 'Caitlyn',
    mail: 'caitlyn@lol.com',
    photo: 'http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/Caitlyn.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg'
  },
  {
    id: 3,
    name: 'Braum',
    mail: 'braum@lol.com',
    photo: 'http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/Braum.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg'
  },
  {
    id: 4,
    name: 'Leona',
    mail: 'leona@lol.com',
    photo: 'http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/Leona.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg'
  }
];
