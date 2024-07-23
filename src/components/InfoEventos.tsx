
function InfoEventos(){
    const eventoID = arguments[0];

    const eventos = [
        {
            id: 101,
            titulo: 'Fiesta Disco Electrónica en Santiago',
            artistas_invitados: 'David Guetta, Martin Garrix, Armin van Buuren, Steve Aoki',
            descripcion: 'Únete a nosotros en Disco Stu para una noche mágica llena de ritmos electrónicos y luces brillantes. Ven y experimenta una atmósfera vibrante con los mejores DJs del mundo, un sistema de sonido de última generación y visuales impresionantes. La pista de baile estará llena de energía y euforia, ¡prepárate para bailar toda la noche!',
            d_resumen: 'Una noche mágica de música electrónica y luces brillantes en Disco Stu en Santiago.',
            fecha: '15 de agosto de 2024',
            img: '/src/assets/imgs/img-eventos/disco101.jpg',
            yt_url: 'https://www.youtube.com/embed/fZQ6Lsg9jus'
        },
        {
            id: 102,
            titulo: 'Rock & Roll Night en Disco Stu Valparaíso',
            artistas_invitados: 'Foo Fighters, Linkin Park, The Killers, Arctic Monkeys',
            descripcion: 'Ven a Disco Stu en Valparaíso para una noche inolvidable de rock & roll. Disfruta de las mejores bandas del género, comida deliciosa y un ambiente lleno de adrenalina. ¡Será una noche épica para todos los amantes del rock!',
            d_resumen: 'Una noche de rock & roll épica en Disco Stu Valparaíso con las mejores bandas del género.',
            fecha: '20 y 21 de septiembre de 2024',
            img: '/src/assets/imgs/img-eventos/disco102.jpg',
            yt_url: 'https://www.youtube.com/embed/C7nExMmmOrc'
        },
        {
            id: 103,
            titulo: 'Jazz Funk Night en Disco Stu Santiago',
            artistas_invitados: 'Wynton Marsalis, Diana Krall, Herbie Hancock, Esperanza Spalding',
            descripcion: 'Disco Stu te invita a una noche de jazz sofisticado con un toque funky. Disfruta de actuaciones en vivo de músicos talentosos en un ambiente acogedor y elegante. Con cócteles exquisitos y aperitivos, ¡esta será una velada inolvidable!',
            d_resumen: 'Una noche de jazz sofisticado y funky en Disco Stu Santiago con músicos talentosos.',
            fecha: '12 de octubre de 2024',
            img: '/src/assets/imgs/img-eventos/disco103.jpg',
            yt_url: 'https://www.youtube.com/embed/slBB10vhVaU'
        },
        {
            id: 104,
            titulo: 'Salsa Night en Disco Stu Viña del Mar',
            artistas_invitados: 'Marc Anthony, Gilberto Santa Rosa, La India',
            descripcion: 'Prepárate para una noche de ritmos latinos en Disco Stu Viña del Mar. Con clases de baile al inicio de la noche, una orquesta en vivo y DJs que mantienen la energía alta, esta será una fiesta interminable de música, baile y diversión.',
            d_resumen: 'Una noche vibrante de ritmos latinos y salsa en Disco Stu Viña del Mar.',
            fecha: '26 de octubre de 2024',
            img: '/src/assets/imgs/img-eventos/disco104.jpeg',
            yt_url: 'https://www.youtube.com/embed/jHgxywmQpWw'
        },
        {
            id: 105,
            titulo: 'Classical Beats en Disco Stu Santiago',
            artistas_invitados: 'Filarmónica de Viena, Anne-Sophie Mutter, Lang Lang, Plácido Domingo',
            descripcion: 'Sumérgete en la elegancia de la música clásica con un toque moderno en Disco Stu Santiago. Este concierto presenta piezas icónicas interpretadas por una de las orquestas más prestigiosas del mundo, en un ambiente refinado y con una acústica perfecta.',
            d_resumen: 'Un concierto de música clásica con un toque moderno en Disco Stu Santiago.',
            fecha: '7 de noviembre de 2024',
            img: '/src/assets/imgs/img-eventos/disco105.jpeg',
            yt_url: 'https://www.youtube.com/embed/GtCqCVqTks0'
        },
        {
            id: 106,
            titulo: 'Reggaetón Party en Disco Stu Talca',
            artistas_invitados: 'Daddy Yankee, Bad Bunny, J Balvin, Karol G',
            descripcion: 'Ven a Disco Stu en Talca para una noche explosiva de reggaetón. Disfruta de los artistas más candentes del género, un potente sistema de sonido y un show de luces espectacular. ¡Prepárate para bailar hasta el amanecer!',
            d_resumen: 'Una noche explosiva de reggaetón en Disco Stu Talca con los artistas más candentes del género.',
            fecha: '22 de noviembre de 2024',
            img: '/src/assets/imgs/img-eventos/disco106.jpg',
            yt_url: 'https://www.youtube.com/embed/LdvZfL6zN1s'
        },
        {
            id: 107,
            titulo: 'Electronic Beach Party en Disco Stu Pichilemu',
            artistas_invitados: 'Tiësto, Dimitri Vegas & Like Mike, Carl Cox',
            descripcion: 'Vive la magia de la música electrónica en el balneario de Pichilemu con Disco Stu. Disfruta de escenarios temáticos impresionantes y una producción de primer nivel durante tres días de fiesta sin parar. ¡Sumérgete en un mundo de fantasía y música!',
            d_resumen: 'Una experiencia única de música electrónica en la playa con Disco Stu en Pichilemu.',
            fecha: '6, 7 y 8 de diciembre de 2024',
            img: '/src/assets/imgs/img-eventos/disco107.jpg',
            yt_url: 'https://www.youtube.com/embed/3UOtF4J9wpo?t=172'
        },
        {
            id: 108,
            titulo: 'Blues Night en Disco Stu Santiago',
            artistas_invitados: "Buddy Guy, Shemekia Copeland, Keb' Mo', Gary Clark Jr.",
            descripcion: 'Disco Stu te invita a una noche especial de blues en uno de sus clubs más legendarios en Santiago. Disfruta de la auténtica música blues en un ambiente íntimo, con algunos de los músicos más talentosos del género y una atmósfera única.',
            d_resumen: 'Una noche especial de blues auténtico en Disco Stu Santiago con músicos talentosos.',
            fecha: '14 de diciembre de 2024',
            img: '/src/assets/imgs/img-eventos/disco108.jpeg',
            yt_url: 'https://www.youtube.com/embed/MHQqrwSmXo0?t=20'
        },
        {
            id: 109,
            titulo: 'Pop Superstars en Disco Stu Santiago',
            artistas_invitados: 'Taylor Swift, Ariana Grande, Justin Bieber, Billie Eilish',
            descripcion: 'Disco Stu te trae un increíble concierto de pop con las superestrellas más populares del momento en Santiago. Este evento en el famoso Movistar Arena promete una noche llena de éxitos, coreografías impresionantes y un espectáculo visual de primer nivel.',
            d_resumen: 'Un increíble concierto de pop con las superestrellas más populares del momento en Disco Stu Santiago.',
            fecha: '20 de enero de 2025',
            img: '/src/assets/imgs/img-eventos/disco109.jpeg',
            yt_url: 'https://www.youtube.com/embed/FflfOb4BWCU'
        },
        {
            id: 110,
            titulo: 'Tango Passion en Disco Stu Santiago',
            artistas_invitados: 'Orquesta El Arranque, Mora Godoy, Julio Bocca, Adriana Varela',
            descripcion: 'Experimenta la pasión y el drama del tango en Disco Stu Santiago. Con bailarines profesionales y una orquesta en vivo, disfruta de una cena exquisita mientras te sumerges en el ambiente sensual y elegante del tango.',
            d_resumen: 'Experimenta la pasión y el drama del tango en Disco Stu Santiago con una orquesta en vivo.',
            fecha: '14 de febrero de 2025',
            img: '/src/assets/imgs/img-eventos/disco110.jpeg',
            yt_url: 'https://www.youtube.com/embed/K8HGzhsUuiY'
        },
        {
            id: 111,
            titulo: 'Hip-Hop Fest en Disco Stu Santiago',
            artistas_invitados: 'Jay-Z, Nas, Kendrick Lamar, Cardi B',
            descripcion: 'Disco Stu Santiago te invita a un festival dedicado a celebrar el vibrante género del hip-hop. Durante un fin de semana, disfruta de actuaciones en vivo, batallas de rap y DJs que pondrán a todos a bailar. ¡También habrá grafitis en vivo y talleres de breakdance!',
            d_resumen: 'Un festival dedicado a celebrar el vibrante género del hip-hop en Disco Stu Santiago.',
            fecha: '5 y 6 de abril de 2025',
            img: '/src/assets/imgs/img-eventos/disco111.jpg',
            yt_url: 'https://www.youtube.com/embed/bhCfQ8BGow8'
        },
        {
            id: 112,
            titulo: 'Indie Night en Disco Stu Santiago',
            artistas_invitados: 'Tame Impala, Florence + The Machine, Arctic Monkeys, The 1975',
            descripcion: 'Descubre la escena indie en Disco Stu Santiago con un concierto exclusivo en el famoso Teatro Caupolicán. Disfruta de bandas emergentes y artistas consagrados del género indie en una noche de música alternativa y vibrante.',
            d_resumen: 'Una noche exclusiva de música indie en Disco Stu Santiago con bandas emergentes y consagradas.',
            fecha: '18 de mayo de 2025',
            img: '/src/assets/imgs/img-eventos/disco112.jpg',
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