import { Book } from "./Book";

export const MOCK_BOOKS: Book[] = [
    {
        id: 1,
        title: 'L\'Ombre du Vent',
        author: 'Carlos Ruiz Zafón',
        countries: ['spain'],
        date: new Date(2001, 4, 12),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MK14FjYfKPewXx6qND_bqNjUcSgrn-ESVl_MV3RotE5WxA09pYh8Q5t4dngoUojRqEc&usqp=CAU',
        description: 'Un livre fascinant secrètement caché dans une bibliothèque mystérieuse.'
    },
    {
        id: 2,
        title: 'Orgueil et Préjugés',
        author: 'Jane Austen',
        countries: ['united_kingdom'],
        date: new Date(1813, 1, 28),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GVsbOFAI9UeU99xznsWLmkCPIk3jJMm7PA&usqp=CAU',
        description: 'L\'histoire d\'amour entre Elizabeth Bennet et Mr. Darcy.'
    },
    {
        id: 3,
        title: 'Cent Ans de Solitude',
        author: 'Gabriel García Márquez',
        countries: ['colombia'],
        date: new Date(1967, 5, 30),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtKSFrxlktAvb_UDntzSYhXxxQXQkuL2blg&usqp=CAU',
        description: 'Le réalisme magique dans un village colombien fictif.'
    },
    {
        id: 4,
        title: 'L\'Étranger',
        author: 'Albert Camus',
        countries: ['algeria', 'france'],
        date: new Date(1942, 5, 6),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqryf2h6-V2L7K4awMl2dMuPEVtixVbjXwJIljd_DsusaqcMbResjDnsobWNQtnWEE28M&usqp=CAU',
        description: 'Un roman existentiel sur l\'absurdité de la vie.'
    },
    {
        id: 5,
        title: '1984',
        author: 'George Orwell',
        countries: ['united_kingdom'],
        date: new Date(1949, 6, 8),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_TwSwXB5hUoZK_vgxLlPDttdxdUUxoK1Tg&usqp=CAU',
        description: 'Une dystopie effrayante et totalitaire.'
    },
    {
        id: 6,
        title: 'Le Parfum',
        author: 'Patrick Süskind',
        countries: ['france', 'italy'],
        date: new Date(1985, 2, 7),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2ie8nRBkcBhTrAxp-vB4IuuRfSDeirDeg&usqp=CAU',
        description: 'Un thriller olfactif.'
    },
    {
        id: 7,
        title: 'Les Misérables',
        author: 'Victor Hugo',
        countries: ['france'],
        date: new Date(1862, 3, 4),
        imgurl: 'https://cdn1.booknode.com/book_cover/83/les_miserables-83116-264-432.jpg',
        description: 'Le destin de Jean Valjean dans la France du 19e siècle.'
    },
    {
        id: 8,
        title: 'Mille Soleils Splendides',
        author: 'Khaled Hosseini',
        countries: ['afghanistan'],
        date: new Date(2007, 5, 22),
        imgurl: 'https://www.babelio.com/couv/CVT_39602_1863620.jpg',
        description: 'Les vies croisées de deux femmes afghanes.'
    },
    {
        id: 9,
        title: 'Le Tambour',
        author: 'Günter Grass',
        countries: ['germany'],
        date: new Date(1959, 5, 8),
        imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYV9cd5zcov_vGPXyVDzNMdkTk28P6bTR7Q&usqp=CAU',
        description: 'Un roman majeur de la littérature allemande.'
    },
    {
        id: 103,
        title: 'Berlin Alexanderplatz',
        author: 'Alfred Döblin',
        countries: ['germany'],
        date: new Date(1929, 8, 28),
        imgurl: 'https://products-images.di-static.com/image/alfred-doblin-berlin-alexanderplatz/9782070119714-475x500-1.jpg',
        description: 'Un chef-d\'œuvre de la littérature expressionniste allemande.'
    },
];