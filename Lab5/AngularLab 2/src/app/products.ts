export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
  categoryName: string;
  likes: number
}

export const products = [
  {
    id: 1,
    name: 'Parfums de Marly Layton Exclusif',
    price: 128000,
    description: 'тип: парфюмерная вода EDP. Oбъем: 125 мл .Cтрана бренда: Франция',
    link: 'https://satu.kz/p112826359-parfums-marly-layton.html?&primelead=MTA',
    image: 'https://images.satu.kz/214677173_w640_h640_parfums-de-marly.jpg',
    rating: 4.4,
    categoryName: 'Parfums' ,
    likes: 0
  },
  {
    id: 2,
    name: 'Porsche 911 ',
    price: 175000000,
    description:'Porsche 911 Turbo S. 3,8 обьем. Незнаешь что выбрать среди немцов выбирай новенький PORSCHE 911 TURBO S. 4 ведущих колеса со лаунч контролем тоже реально даст прикурить вашему Батырханчику на 3.5 камри.',
    link: 'https://kolesa.kz/a/show/161782949',
    image: 'https://alakcell-photos-kl.kcdn.kz/webp/94/94b39ab8-a980-4995-b7a5-9a9608f3c4f8/8-1200x752.jpg',
    rating: 5,
    categoryName: 'Cars' ,
    likes: 0
  },
  {
    id: 3,
    name: 'Tekken 8 Deluxe edition',
    price: 32990,
    description: '32 FIGHTERS FOR A NEW GENERATION. Completely redesigned character visuals. Elaborate, highly-detailed models built from the ground and high-fidelity graphics ',
    link: 'https://store.steampowered.com/app/1778820/TEKKEN_8/',
    image: 'https://static.bandainamcoent.eu/high/tekken/tekken-8/00-page-setup/TEKKEN8_Header_mobile_2.jpg',
    rating : 4.7,
    categoryName: 'Games' ,
    likes: 0
  },
  {
    id: 4,
    name: 'Frostmourne Lich Kings Swords from World of Warcraft',
    price: 95000,
    description: 'Frostmourne Lich Kings Swords from World of Warcraft. Frostmourne was the mourneblade of the Lich King. A fearsome, rune-inscribed two-handed longsword,[1] it possessed the power to shatter[2] and imprison the souls of its victims and could remake the living into mindless undead. Frostmourne was thrust from the Frozen Throne by the Lich King Nerzhul and was taken up by Arthas Menethil in the wastes of Northrend during the Third War.',
    link: 'https://satu.kz/p101520831-frostmorn-ledyanaya-skorb.html',
    image: 'data:image/jpeg;base64,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',
    rating: 4.6,
    categoryName: 'Collectibles' ,
    likes: 0
  },
  {
    id: 5,
    name: 'Tom Ford Ebene Fume',
    price: 136490,
    description: 'Объем - 50 мл.Оригинальная парфюмированная вода Tom Ford Ebene Fume представлена в интернет магазине  по самым выгодным ценам. Ébène Fumé Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные древесные.',
    link: 'https://satu.kz/p114971771-tom-ford-ebene.html?&primelead=Ng',
    image: 'https://justattar.com/cdn/shop/products/tom27_1800x1800_1bbed1f3-059d-4f65-b32c-62889ecc1879.jpg?v=1672385899',
    rating: 4.4,
    categoryName: 'Parfums' ,
    likes: 0
  },
  {
    id: 6,
    name: 'SRT DODGE CHALLENGER HELLCAT',
    price: 55000000,
    description: 'SRT DODGE CHALLENGER HELLCAT. 6.4 обьемный HELLCAT РЕАЛЬНО ДАСТ ПРИКУРИТЬ ВАШЕМУ БАТЫРХАНЧИКУ НА 3.5 КАМРИ',
    link: 'https://kolesa.kz/a/show/163547168',
    image: 'https://alakcell-photos-kl.kcdn.kz/webp/79/79a51430-48a7-48b7-b086-9ae31288cd86/3-1200x752.webp',
    rating: 4.89,
    categoryName: 'Cars' ,
    likes: 0
  },
  {
    id: 7,
    name: 'Orto Parisi Cuoium',
    price: 85360,
    description: 'Orto Parisi Cuoium. Аромат от автора Nasomatto Black Afgano. Своим темнейшим присутствием. Хочешь пахнуть как Пеплный Рыцарь этот выбор для тебя',
    link: 'https://satu.kz/p114972147-orto-parisi-cuoium.html?token=v2%3AC7N_ASz1fHBBgvszQXZX4JmuiwyjQ4hRv6t7F2DVue4x8brvkOUpha6B-pDUTn1tcgXEC4sJ6xP52-YE7ZwgGzZ0NOaS8KIUZtERjr-SlnfquMzUEu_TwHlmcPhn_5Wf&campaign_id=72918&product_id=114972147&source=prom%3Asearch%3Aserp&locale=ru&category_ids=161601&primelead=Ng&from_spa=true',
    image: 'https://m.media-amazon.com/images/I/6141RfYmFdL.jpg',
    rating: 3.8,
    categoryName: 'Parfums' ,
    likes: 0
  },
  {
    id: 8,
    name: 'Ford Mustang Bullit',
    price: 48500000,
    description: 'Ford Mustang Bullit. 5.0 обьем. 500 лошадок по капотом. На механической коробке передач покажет возможности Американских Маслкаров. На дороге без внимания не останетесь.',
    link: 'https://kolesa.kz/a/show/160831382',
    image: 'https://alakcell-photos-kl.kcdn.kz/webp/85/85a48880-d46e-456d-b0be-9a6f5d3674ee/16-1200x752.jpg',
    rating: 4.91,
    categoryName: 'Cars' ,
    likes: 0
  },
  {
    id: 9,
    name: 'Dark Lord by Killian',
    price: 170000,
    description: 'Dark Lord by Killian Название говорит само за себя. 50 мл отдушины Короля. Франзуцская нишевая парфюмерия что заслуживает Внимания',
    link: 'https://satu.kz/p76805730-kilian-dark-lord.html?&primelead=MTA',
    image: 'https://images.satu.kz/162876141_w640_h640_kilian-dark.jpg',
    rating: 4.9,
    categoryName: 'Parfums' ,
    likes: 0
  },
  {
    id: 10,
    name: 'Toyota GR SUPRA A90',
    price: 45500000,
    description: '3х литровая Toyota Supra Нового поколения в кузове A90. Легенда с задними приводами на моторе B58, в белом цвето заметна и ночью и днем. Внимание обеспечено.',
    link: 'https://kolesa.kz/a/show/159252382',
    image: 'https://alakcell-photos-kl.kcdn.kz/webp/c8/c87809e0-c62a-4dd4-a33e-9a2c11ff1a65/2-1200x752.webp',
    rating: 4.45,
    categoryName: 'Cars' ,
    likes: 0
  },
  {
    id: 11,
    name: 'Cyberpunk 2077',
    price: 29281,
    description: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h3c/84695113367582.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/cyberpunk-2077-ultimate-edition-115269391/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h3c/84695113367582.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'Games',
    likes: 0
  },
  {
    id: 12,
    name: 'Меч Айзена Сосуке',
    price: 21250,
    description: 'Меч Айдзена Сосуке из Блича его Кьеко Суигетцу',
    link: 'https://kaspi.kz/shop/p/metallicheskii-mech-soske-aizen-blich-katana-suvenirnaja-anime-japonskaja-116247951/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h3b/85027636838430.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'Collectibles',
    likes: 0
  },
  {
    id: 13,
    name: 'UNO Flip',
    price: 449,
    description: 'Настольная игра UNO Flip GDR44',
    link: 'https://kaspi.kz/shop/p/darina-sok-jabloko-1-5-l-114895308/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h12/63928826167326.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'Games',
    likes: 0
  },
  {
    id: 14,
    name: 'Система нагревания IQOS ILUMA зеленый',
    price: 29500 ,
    description: 'повторный запуск без подзарядки: Да. Тип: держатель с зарядным устройством. Количество повторных запусков без подзарядки: 2 раза. Материал корпуса: пластик',
    link: 'https://kaspi.kz/shop/p/iqos-iluma-zelenyi-113970915/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h2b/84248955781150.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'Cigarette',
    likes: 0
  },
  {
    id: 15,
    name: 'Система нагревания IQOS ILUMA PRIME черный',
    price: 51500,
    description: 'повторный запуск без подзарядки имеется. тип: держатель с зарядным устройством количество повторных запусков без подзарядки: 2 раза .материал корпуса: металл',
    link: 'https://kaspi.kz/shop/p/iqos-iluma-prime-chernyi-115959258/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h95/84938327359518.png?format=gallery-medium',
    rating: 5,
    categoryName: 'Cigarette',
    likes: 0

  },
  {
    id: 16,
    name: 'Маска Бетмена',
    price: 5000,
    description: 'Маска киногерои косплей',
    link: 'https://kaspi.kz/shop/p/maska-betmena-113510657/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2d/84000310296606.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'Collectibles',
    likes: 0

  },
];

