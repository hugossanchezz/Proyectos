import { cargarIdioma } from "/src/js/idioma.js";

const idioma = cargarIdioma();

const estrenos = {
    es: [
        {
            cartelera: '/img/estrenos/mari-callas.avif',
            titulo: 'María Callas',
            fechaEstreno: '7 de febrero de 2025',
            descripcion: 'Biografía de la legendaria soprano María Callas, dirigida por Pablo Larraín.',
        },
        {
            cartelera: '/img/estrenos/capitan-america-new-world.jpeg',
            titulo: 'Capitán América: Brave New World',
            fechaEstreno: '14 de febrero de 2025',
            descripcion: 'El regreso de Steve Rogers en una nueva aventura del universo Marvel.',
        },
        {
            cartelera: '/img/estrenos/bridget-jones.jpg',
            titulo: 'Bridget Jones: Loca por él',
            fechaEstreno: '14 de febrero de 2025',
            descripcion: 'Bridget Jones regresa para una nueva comedia romántica llena de enredos.',
        },
        {
            cartelera: '/img/estrenos/aun-estoy-aqui.jpg',
            titulo: 'Aún estoy aquí',
            fechaEstreno: '21 de febrero de 2025',
            descripcion: 'Una historia de resistencia y valentía: el viaje de una madre que convirtió el dolor en lucha tras la desaparición de su esposo durante la dictadura brasileña.',
        },
        {
            cartelera: '/img/estrenos/the-monkey.webp',
            titulo: 'The Monkey',
            fechaEstreno: '21 de febrero de 2025',
            descripcion: 'Thriller psicológico dirigido por Osgood Perkins.',
        },
        {
            cartelera: '/img/estrenos/paddington.jpg',
            titulo: 'Paddington: Aventura en la selva',
            fechaEstreno: '21 de febrero de 2025',
            descripcion: 'El oso Paddington vive nuevas aventuras en la jungla.',
        },
        {
            cartelera: '/img/estrenos/daniela-forever.jpg',
            titulo: 'Daniela Forever',
            fechaEstreno: '28 de febrero de 2025',
            descripcion: 'Comedia dirigida por Nacho Vigalondo.',
        },
        {
            cartelera: '/img/estrenos/un-completo-desconocido.png',
            titulo: 'Un completo desconocido',
            fechaEstreno: '28 de febrero de 2025',
            descripcion: 'Drama con ocho nominaciones a los Premios Oscar, dirigido por James Mangold.',
        },
        {
            cartelera: '/img/estrenos/secreto-orfebre.jpg',
            titulo: 'El secreto del orfebre',
            fechaEstreno: '28 de febrero de 2025',
            descripcion: 'Thriller español dirigido por Olga Osorio.',
        },
        {
            cartelera: '/img/estrenos/amenaza-en-el-aire.jpg',
            titulo: 'Amenaza en el aire',
            fechaEstreno: '28 de febrero de 2025',
            descripcion: 'Película de acción dirigida por Mel Gibson.',
        },
        {
            cartelera: '/img/estrenos/the-brutalist.jpg',
            titulo: 'The Brutalist',
            fechaEstreno: '24 de enero de 2025',
            descripcion: 'Drama protagonizado por Ethan Hawke y Marion Cotillard.',
        },
        {
            cartelera: '/img/estrenos/flow.jpg',
            titulo: 'Flow',
            fechaEstreno: '24 de enero de 2025',
            descripcion: 'Película de animación nominada al Oscar, dirigida por Chris Williams.',
        },
        {
            cartelera: '/img/estrenos/memorias-de-un-caracol.jpg',
            titulo: 'Memorias de un caracol',
            fechaEstreno: '31 de enero de 2025',
            descripcion: 'Drama romántico protagonizado por Emma Stone y Ryan Gosling.',
        },
        {
            cartelera: '/img/estrenos/septiembre-cinco.jpg',
            titulo: 'Septiembre 5',
            fechaEstreno: '31 de enero de 2025',
            descripcion: 'Thriller psicológico dirigido por David Fincher.',
        },
        {
            cartelera: '/img/estrenos/un-hombre-diferente.jpg',
            titulo: 'Un hombre diferente',
            fechaEstreno: '31 de enero de 2025',
            descripcion: 'Película de terror protagonizada por Sebastian Stan.',
        }
    ],
    en: [
        {
            cartelera: '/img/estrenos/mari-callas.avif',
            titulo: 'Maria Callas',
            fechaEstreno: 'February 7, 2025',
            descripcion: 'Biography of the legendary soprano Maria Callas, directed by Pablo Larraín.',
        },
        {
            cartelera: '/img/estrenos/capitan-america-new-world.jpeg',
            titulo: 'Captain America: Brave New World',
            fechaEstreno: 'February 14, 2025',
            descripcion: 'The return of Steve Rogers in a new Marvel adventure.',
        },
        {
            cartelera: '/img/estrenos/bridget-jones.jpg',
            titulo: 'Bridget Jones: Mad About Him',
            fechaEstreno: 'February 14, 2025',
            descripcion: 'Bridget Jones returns in a new romantic comedy full of twists.',
        },
        {
            cartelera: '/img/estrenos/aun-estoy-aqui.jpg',
            titulo: 'I’m Still Here',
            fechaEstreno: 'February 21, 2025',
            descripcion: 'A story of resilience and bravery: a mother’s journey turning pain into activism after her husband’s disappearance during the Brazilian dictatorship.',
        },
        {
            cartelera: '/img/estrenos/the-monkey.webp',
            titulo: 'The Monkey',
            fechaEstreno: 'February 21, 2025',
            descripcion: 'Psychological thriller directed by Osgood Perkins.',
        },
        {
            cartelera: '/img/estrenos/paddington.jpg',
            titulo: 'Paddington: Jungle Adventure',
            fechaEstreno: 'February 21, 2025',
            descripcion: 'Paddington the bear embarks on new adventures in the jungle.',
        },
        {
            cartelera: '/img/estrenos/daniela-forever.jpg',
            titulo: 'Daniela Forever',
            fechaEstreno: 'February 28, 2025',
            descripcion: 'Comedy directed by Nacho Vigalondo.',
        },
        {
            cartelera: '/img/estrenos/un-completo-desconocido.png',
            titulo: 'A Complete Stranger',
            fechaEstreno: 'February 28, 2025',
            descripcion: 'Drama with eight Oscar nominations, directed by James Mangold.',
        },
        {
            cartelera: '/img/estrenos/secreto-orfebre.jpg',
            titulo: 'The Goldsmith’s Secret',
            fechaEstreno: 'February 28, 2025',
            descripcion: 'Spanish thriller directed by Olga Osorio.',
        },
        {
            cartelera: '/img/estrenos/amenaza-en-el-aire.jpg',
            titulo: 'Threat in the Air',
            fechaEstreno: 'February 28, 2025',
            descripcion: 'Action movie directed by Mel Gibson.',
        },
        {
            cartelera: '/img/estrenos/the-brutalist.jpg',
            titulo: 'The Brutalist',
            fechaEstreno: 'January 24, 2025',
            descripcion: 'Drama starring Ethan Hawke and Marion Cotillard.',
        },
        {
            cartelera: '/img/estrenos/flow.jpg',
            titulo: 'Flow',
            fechaEstreno: 'January 24, 2025',
            descripcion: 'Oscar-nominated animated film directed by Chris Williams.',
        },
        {
            cartelera: '/img/estrenos/memorias-de-un-caracol.jpg',
            titulo: 'Memories of a Snail',
            fechaEstreno: 'January 31, 2025',
            descripcion: 'Romantic drama starring Emma Stone and Ryan Gosling.',
        },
        {
            cartelera: '/img/estrenos/septiembre-cinco.jpg',
            titulo: 'September 5',
            fechaEstreno: 'January 31, 2025',
            descripcion: 'Psychological thriller directed by David Fincher.',
        },
        {
            cartelera: '/img/estrenos/un-hombre-diferente.jpg',
            titulo: 'A Different Man',
            fechaEstreno: 'January 31, 2025',
            descripcion: 'Horror film starring Sebastian Stan.',
        }
    ]
};

export const estrenos2025 = estrenos[idioma] || estrenos.es;
