
function InfoEventos(){
    const eventoID = arguments[0];

    const eventos = [
        {
            id: 101,
            titulo: 'Noche de Electrónica en Santiago',
            artistas_invitados: 'David Guetta, Martin Garrix, Armin van Buuren, Steve Aoki',
            descripcion: 'Sumérgete en una noche mágica en el corazón de Santiago, donde las luces brillantes y la música electrónica vibran en perfecta armonía. Este evento te transportará a una dimensión de ritmos hipnóticos y beats envolventes. Disfruta de una atmósfera única en un club de renombre, con un sistema de sonido de última generación y visuales impresionantes que complementan la experiencia sonora. La pista de baile será el epicentro de la fiesta, llena de energía y euforia.',
            d_resumen: 'Una velada de música electrónica con los mejores DJs del mundo en el corazón de Santiago.',
            fecha: '15 de agosto de 2024',
            img: '/src/assets/imgs/img-eventos/id101.jpg',
            yt_url: 'https://www.youtube.com/embed/fZQ6Lsg9jus'
        },{
            id: 102,
            titulo: 'Festival de Rock en Valparaiso',
            artistas_invitados: 'Foo Fighters, Linkin Park, The Killers, Arctic Monkeys',
            descripcion: 'Ven a vivir un festival de rock inolvidable en el icónico Parque Cultural de Valparaíso. Durante dos días, este evento reúne a las bandas más legendarias y a los nuevos talentos del rock. Con escenarios al aire libre, comida deliciosa, y un ambiente cargado de adrenalina, este festival promete momentos épicos para todos los amantes del rock. Además, habrá zonas de descanso y actividades interactivas para disfrutar entre conciertos.',
            d_resumen: 'Un festival de rock con las bandas más legendarias y nuevos talentos en la vibrante ciudad de Valparaíso.',
            fecha: '20 y 21 de septiembre de 2024',
            img: '/src/assets/imgs/img-eventos/id102.jpg',
            yt_url: 'https://www.youtube.com/embed/C7nExMmmOrc'
        },{
            id: 103,
            titulo: 'Concierto de Jazz en Santiago',
            artistas_invitados: 'Wynton Marsalis, Diana Krall, Herbie Hancock, Esperanza Spalding',
            descripcion: 'Disfruta de una noche de jazz sofisticado y envolvente en el corazón de Santiago. Este concierto íntimo, celebrado en un elegante club de jazz, te permitirá disfrutar de actuaciones en vivo de algunos de los músicos más talentosos de la escena actual. Con una ambientación cálida y acogedora, y un menú de cócteles y aperitivos exquisitos, este evento es perfecto para una velada inolvidable.',
            d_resumen: 'Una noche de jazz sofisticado en un club exclusivo de Santiago, con músicos de renombre internacional.',
            fecha: '12 de octubre de 2024',
            img: '/src/assets/imgs/img-eventos/id103.jpg',
            yt_url: 'https://www.youtube.com/embed/slBB10vhVaU'
            
        },{
            id: 104,
            titulo: 'Noche de Salsa en Viña del Mar',
            artistas_invitados: 'Marc Anthony, Gilberto Santa Rosa, La India',
            descripcion: 'Prepárate para una noche de ritmos latinos en el vibrante escenario de Viña del Mar. Este evento te ofrece una experiencia auténtica de salsa, con clases de baile al inicio de la noche para que todos puedan disfrutar de la pista de baile. Con una orquesta en vivo y DJs que mantienen la energía alta, esta noche será una fiesta interminable de música, baile y diversión. Los mejores bailarines del área también estarán presentes, mostrando sus movimientos y animando al público.',
            d_resumen: 'Una noche vibrante de ritmos latinos y salsa en la hermosa ciudad costera de Viña del Mar.',
            fecha: '26 de octubre de 2024',
            img: '/src/assets/imgs/img-eventos/id104.webp',
            yt_url: 'https://www.youtube.com/embed/jHgxywmQpWw'
        },{
            id: 105,
            titulo: 'Concierto de Música Clásica en Santiago',
            artistas_invitados: 'Filarmónica de Viena, Anne-Sophie Mutter, Lang Lang, Plácido Domingo',
            descripcion: 'Sumérgete en la belleza y la elegancia de la música clásica en el majestuoso escenario del Teatro Municipal de Santiago. Este concierto presenta una selección de piezas icónicas interpretadas por una de las orquestas más prestigiosas del mundo. La acústica perfecta y el ambiente refinado de este lugar histórico aseguran una experiencia musical sublime.',
            d_resumen: 'Un concierto de música clásica con una orquesta prestigiosa en un escenario majestuoso de Santiago.',
            fecha: '7 de noviembre de 2024',
            img: '/src/assets/imgs/img-eventos/id105.jpg',
            yt_url: 'https://www.youtube.com/embed/GtCqCVqTks0'
        },{
            id: 106,
            titulo: 'Fiesta de Reggaetón en Talca',
            artistas_invitados: 'Daddy Yankee, Bad Bunny, J Balvin, Karol G',
            descripcion: 'Talca te espera para una noche explosiva de reggaetón en uno de los mejores clubs de Talca. Este evento reúne a los artistas más candentes del género para ofrecerte una noche llena de ritmo y energía. Con un sistema de sonido potente y un show de luces espectacular, prepárate para bailar sin parar hasta el amanecer.',
            d_resumen: 'Una noche explosiva de reggaetón con los artistas más candentes del género en Talca.',
            fecha: '22 de noviembre de 2024',
            img: '/src/assets/imgs/img-eventos/id106.jpg',
            yt_url: 'https:/www.youtube.com/embed/LdvZfL6zN1s'
        },{
            id: 107,
            titulo: 'Festival de Música Electrónica en Pichilemu',
            artistas_invitados: 'Tiësto, Dimitri Vegas & Like Mike, Carl Cox',
            descripcion: 'Vive la magia de la música electrónica en el balneario de Pichilemu, conocido por sus playas y olas perfectas para el surf. Este evento ofrece una experiencia única con escenarios temáticos impresionantes y una producción de primer nivel. Durante tres días, sumérgete en un mundo de fantasía y música, con actuaciones de los DJs más reconocidos a nivel mundial.',
            d_resumen: 'Vive la magia de la música electrónica en el famoso balneario de Pichilemu.',
            fecha: '6, 7 y 8 de diciembre de 2024',
            img: '/src/assets/imgs/img-eventos/id107.jpg',
            yt_url: 'https://www.youtube.com/embed/3UOtF4J9wpo?t=172'
        },{
            id: 108,
            titulo: 'Noche de Blues en Santiago',
            artistas_invitados: "Buddy Guy, Shemekia Copeland, Keb' Mo', Gary Clark Jr.",
            descripcion: 'Santiago, la ciudad del blues, te invita a una noche especial en uno de sus clubs más legendarios. Disfruta de la auténtica música blues en un ambiente íntimo y acogedor, con algunos de los músicos más talentosos del género. La combinación de buena música, comida típica y un público apasionado por el blues, crea una atmósfera única y memorable.',
            d_resumen: 'Una noche especial de blues auténtico en uno de los clubs más legendarios de Santiago.',
            fecha: '14 de diciembre de 2024',
            img: '/src/assets/imgs/img-eventos/id108.webp',
            yt_url: 'https://www.youtube.com/embed/MHQqrwSmXo0?t=20'
        },{
            id: 109,
            titulo: 'Concierto de Pop en Santiago',
            artistas_invitados: 'Taylor Swift, Ariana Grande, Justin Bieber, Billie Eilish',
            descripcion: 'Santiago, la ciudad de las estrellas, será el escenario de un increíble concierto de pop con las superestrellas más populares del momento. Este evento, que se llevará a cabo en el famoso Movistar Arena, promete una noche llena de éxitos, coreografías impresionantes y un espectáculo visual de primer nivel.',
            d_resumen: 'Un increíble concierto de pop con las superestrellas más populares del momento en Santiago.',
            fecha: '20 de enero de 2025',
            img: '/src/assets/imgs/img-eventos/id109.png',
            yt_url: 'https://www.youtube.com/embed/FflfOb4BWCU'
        },{
            id: 110,
            titulo: 'Noche de Tango en Santiago',
            artistas_invitados: 'Orquesta El Arranque, Mora Godoy, Julio Bocca, Adriana Varela',
            descripcion: 'Experimenta la pasión y el drama del tango en una noche especial en el corazón de Santiago. Este evento te ofrece una auténtica experiencia de tango, con bailarines profesionales que te dejarán sin aliento y una orquesta en vivo que captura la esencia de este baile argentino. Disfruta de una cena exquisita mientras te sumerges en el ambiente sensual y elegante del tango.',
            d_resumen: 'Experimenta la pasión y el drama del tango en una noche especial en el corazón de Santiago.',
            fecha: '14 de febrero de 2025',
            img: '/src/assets/imgs/img-eventos/id110.jpeg',
            yt_url: 'https://www.youtube.com/embed/K8HGzhsUuiY'
        },{
            id: 111,
            titulo: 'Festival de Hip-Hop en Santiago',
            artistas_invitados: 'Jay-Z, Nas, Kendrick Lamar, Cardi B',
            descripcion: 'Santiago, la cuna del hip-hop en Chile, te invita a un festival dedicado a celebrar este vibrante género musical. Durante un fin de semana, disfruta de actuaciones en vivo, batallas de rap, y DJs que pondrán a todos a bailar. Este evento también contará con grafitis en vivo y talleres de breakdance, ofreciendo una experiencia completa de la cultura hip-hop.',
            d_resumen: 'Un festival dedicado a celebrar el vibrante género del hip-hop en Santiago.',
            fecha: '5 y 6 de abril de 2025',
            img: '/src/assets/imgs/img-eventos/id111.jpg',
            yt_url: 'https://www.youtube.com/embed/bhCfQ8BGow8'
        },{
            id: 112,
            titulo: 'Concierto de Indie en Santiago',
            artistas_invitados: 'Tame Impala, Florence + The Machine, Arctic Monkeys, The 1975',
            descripcion: 'Descubre la escena indie en un concierto exclusivo en el famoso Teatro Caupolicán de Santiago. Este evento presenta una selección de bandas emergentes y artistas consagrados del género indie, ofreciendo una noche de música alternativa y vibrante. Con un ambiente íntimo y una acústica excelente, este concierto es perfecto para los amantes de la música independiente.',
            d_resumen: 'Un concierto exclusivo de música indie en el famoso Teatro Caupolicán de Santiago.',
            fecha: '18 de mayo de 2025',
            img: '/src/assets/imgs/img-eventos/id112.jpg',
            yt_url: 'https://www.youtube.com/embed/kDC5PN5AUSg?t=70'
        }
    ];

    return eventos
}

export function InfoEventosFiltrado(evID:number){
    
    const infoEv = InfoEventos();

    const eventoFiltrado = infoEv.filter(item=>
    (evID ? item.id === evID : true)
    )

    return eventoFiltrado[0]
}

export default InfoEventos