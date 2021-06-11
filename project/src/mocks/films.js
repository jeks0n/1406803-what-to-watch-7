const MOVIES = [{
  id: 1,
  name: 'Terminator 3: Sky Net Database',
  posterImage: 'img/terminator-sky-net-database-poster.jpg',
  previewImage: 'img/terminator-sky-net-database.jpg',
  backgroundImage: 'img/bg-terminator-sky-net-database.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 5.9,
  scoresCount: 123,
  director: 'Wes Andreson',
  actors: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runtime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
},{
  id: 2,
  name: 'The Terminator',
  posterImage: 'img/terminator-poster.jpg',
  previewImage: 'img/terminator.jpg',
  backgroundImage: 'img/bg-terminator.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
  rating: 9.9,
  scoresCount: 270,
  director: 'James Cameron',
  actors: ['Arnold Schwarzenegger', 'Michael Biehn', 'Linda Hamilton'],
  runtime: 120,
  genre: 'Action',
  released: 1991,
  isFavorite: true,
},{
  id: 3,
  name: 'Commando',
  posterImage: 'img/commando-poster.jpg',
  previewImage: 'img/commando.jpg',
  backgroundImage: 'img/bg-commando.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Mark L. Lester',
  actors: ['Jamie Lee Curtis', 'Penelope Ann Miller', 'Carl Weathers'],
  runtime: 109,
  genre: 'Drama',
  released: 1988,
  isFavorite: true,
},{
  id: 4,
  name: 'Predator',
  posterImage: 'img/predator-poster.jpg',
  previewImage: 'img/predator.jpg',
  backgroundImage: 'img/bg-predator.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.',
  rating: 8.0,
  scoresCount: 200,
  director: 'John McTiernan',
  actors: ['Jack Nicholson', 'Marlon Brando', 'Robert De Niro'],
  runtime: 125,
  genre: 'Fantasy',
  released: 1993,
  isFavorite: false,
},{
  id: 5,
  name: 'Red Heat',
  posterImage: 'img/red-heat-poster.jpg',
  previewImage: 'img/red-heat.jpg',
  backgroundImage: 'img/bg-red-heat.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'A tough Russian policeman is forced to partner up with a cocky Chicago police detective when he is sent to Chicago to apprehend a Georgian drug lord who killed his partner and fled the country.',
  rating: 7.9,
  scoresCount: 180,
  director: 'Walter Hill',
  actors: ['Al Pacino', 'Daniel Day-Lewis'],
  runtime: 95,
  genre: 'Romance',
  released: 1988,
  isFavorite: false,
},{
  id: 6,
  name: 'Kindergarten Cop',
  posterImage: 'img/kindergarten-cop-poster.jpg',
  previewImage: 'img/kindergarten-cop.jpg',
  backgroundImage: 'img/bg-kindergarten-cop.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A tough cop must pose as a kindergarten teacher in order to locate a dangerous criminal\'s ex-wife, who may hold the key to putting him behind bars.',
  rating: 6.9,
  scoresCount: 120,
  director: 'Ivan Reitman',
  actors: ['Dustin Hoffman', 'Tom Hanks', 'Anthony Hopkins', 'Paul Newman'],
  runtime: 90,
  genre: 'Criminal',
  released: 1990,
  isFavorite: false,
},{
  id: 7,
  name: 'True Lies',
  posterImage: 'img/true-lies-poster.jpg',
  previewImage: 'img/true-lies.jpg',
  backgroundImage: 'img/bg-true-lies.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A fearless, globe-trotting, terrorist-battling secret agent has his life turned upside down when he discovers his wife might be having an affair with a used-car salesman while terrorists smuggle nuclear war heads into the United States.',
  rating: 9.0,
  scoresCount: 240,
  director: 'James Cameron',
  actors: ['Denzel Washington', 'Spencer Tracy', 'Laurence Olivier', 'Jack Lemmon'],
  runtime: 100,
  genre: 'Romance',
  released: 1994,
  isFavorite: false,
},{
  id: 8,
  name: 'Terminator 3: Rise of the Machines',
  posterImage: 'img/terminator-3-poster.jpg',
  previewImage: 'img/terminator-3.jpg',
  backgroundImage: 'img/bg-terminator-3.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.',
  rating: 6.0,
  scoresCount: 132,
  director: 'Mark L. Lester',
  actors: ['Michael Caine', 'James Stewart', 'Robin Williams'],
  runtime: 123,
  genre: 'Comedy',
  released: 2003,
  isFavorite: false,
}];

export default MOVIES;
