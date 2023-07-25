const JUEGOS = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    category: "Accion",
    price: 265000,
    description:
      "Cyberpunk 2077 es un videojuego de rol de mundo abierto desarrollado por CD Projekt RED.",
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2020/12/09/16075046078209.jpg",
    stock: 10,
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    category: "Accion",
    price: 101000,
    description:
      "Red Dead Redemption 2 es un videojuego de acción-aventura y mundo abierto desarrollado por Rockstar Games.",
    img: "https://i.ytimg.com/vi/SXvQ1nK4oxk/sddefault.jpg",
    stock: 8,
  },
  {
    id: 3,
    title: "Resident Evil Village",
    category: "Terror",
    price: 138900,
    description:
      "Resident Evil Village es un videojuego de survival horror desarrollado y publicado por Capcom.",
    img: "https://i.blogs.es/8f90fd/030521-re8view/840_560.jpeg",
    stock: 5,
  },
  {
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    category: "Rol",
    price: 23099,
    description:
      "The Witcher 3: Wild Hunt es un videojuego de rol desarrollado por CD Projekt RED.",
    img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-witcher-3/5/56/WildHuntMainCharacters.jpg",
    stock: 12,
  },
  {
    id: 5,
    title: "Halo Infinite",
    category: "Shooter",
    price: 60000,
    description:
      "Halo Infinite es un videojuego de disparos en primera persona desarrollado por 343 Industries.",
    img: "https://assets.xboxservices.com/assets/95/eb/95eb973b-006b-4533-8902-f5a3f8dfd955.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg",
    stock: 6,
  },
  {
    id: 6,
    title: "God of War",
    category: "Aventura",
    price: 74866,
    description:
      "God of War es un videojuego de acción y aventura desarrollado por Santa Monica Studio.",
    img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/analisis-god-war-ragnarok-2862115.jpg?tf=1200x",
    stock: 7,
  },
  {
    id: 7,
    title: "Final Fantasy VII Remake",
    category: "Rol",
    price: 90674,
    description:
      "Final Fantasy VII Remake es un videojuego de rol desarrollado por Square Enix.",
    img: "https://sm.ign.com/ign_es/game/f/final-fant/final-fantasy-vii-remake_ye81.jpg",
    stock: 8,
  },
  {
    id: 8,
    title: "Call of Duty: Warzone",
    category: "Shooter",
    price: 0,
    description:
      "Call of Duty: Warzone es un videojuego de disparos en línea desarrollado por Infinity Ward y Raven Software.",
    img: "https://i.blogs.es/b2ec36/warzone/840_560.jpeg",
    stock: 10,
  },
  {
    id: 9,
    title: "Assassin's Creed Valhalla",
    category: "Aventura",
    price: 199900,
    description:
      "Assassin's Creed Valhalla es un videojuego de acción y aventura desarrollado por Ubisoft.",
    img: "https://imagenes.heraldo.es/files/image_990_v3/files/fp/uploads/imagenes/2020/11/21/assassins-creed-valhalla-1.r_d.460-117.jpeg",
    stock: 10,
  }
];


export const getGames = (id) => {
  const _juegos = id
    ? JUEGOS.filter((juego) => juego.category.toLowerCase() === id)
    : JUEGOS;

  return new Promise((res) => {
    setTimeout(() => {
      res(_juegos);
    }, 500);
  });
};

export const getGame = (id) => {
  const juego = JUEGOS.filter((game) => game.id === id)[0];

  return new Promise((res) => {
    setTimeout(() => {
      res(juego);
    }, 1500);
  });
};