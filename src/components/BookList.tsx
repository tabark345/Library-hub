import { User, Star } from 'lucide-react'
//import img for books (1)>(20)
import TheQuran from "../assets/The Quran.jpg"
import ToKillaMockingbird from "../assets/to kill mocking bird.jfif"
import go from "../assets/1984.jpg"
import PrideandPrejudice from "../assets/pride and prejudice.jpg"
import TheGreatGatsby from "../assets/The Great Gatsby.jfif"
import OneHundredYearsofSolitude from "../assets/One Hundred Years of Solitude.jpg"
import MobyDick from "../assets/Moby-Dick.jpg"
import WarandPeace from "../assets/War and Peace.jfif"
import CrimeandPunishment from "../assets/Crime and Punishment.jpg"
import TheCatcherintheRye from "../assets/The Catcher in the Rye 1.jfif"
import theOdyssey from "../assets/The Odyssey.jfif"
import Frankenstein from "../assets/Frankenstein.jfif"
import TheHobbit from "../assets/The Hobbit.jpg"
import Dracula from "../assets/Darcula.jfif"
import TheBible from "../assets/the Bible.jfif"
import TheDaVinciCode from "../assets/The Da Vinci Code.jpg"
import TheDivineComedy from "../assets/The Divine Comedy.jpg"
import ATaleofTwoCities from "../assets/A Tale of Two Cities.jpg"
import GoneGirl from "../assets/Gone Girl.jpg"
import SapiensABriefHistoryofHumankind from "../assets/Sapiens A Brief History of Humankind.jpg"


// import from (21)>(30)
import ThePictureofDorianGray from "../assets/The Picture of Dorian Gray.jpg"
import TheAlchemist from "../assets/The Alchemist.jpg"
import AnnaKarenina from "../assets/Anna Karenina.jpg"
import LesMiserables from "../assets/Les Misérables.jpg"
import TheIliad from "../assets/The Iliad.jpg"
import JaneEyre from "../assets/Jane Eyre.jpg"
import BraveNewWorld from "../assets/Brave New World.jpg"
import TheBookThief from "../assets/The Book Thief.jpg"
import TheLordoftheRings from "../assets/The Lord of the Rings.jpg"
import DonQuixote from "../assets/Don Quixote.jpg"
const books = [ 
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A powerful exploration of racial injustice in the American South through the eyes of a young girl.",
        rating: 4.5,
        image: ToKillaMockingbird,
        category: "Fiction"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel set in a totalitarian society, exploring themes of surveillance and control.",
        rating: 4.7,
        image: go,
        category: "Science Fiction"
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic romance novel examining societal expectations and the path to true love in Georgian England.",
        rating: 4.3,
        image: PrideandPrejudice,
        category: "Romance"
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A critique of the American Dream set in the Roaring Twenties, exploring wealth, love, and disillusionment.",
        rating: 4.4,
        image: TheGreatGatsby,
        category: "Fiction"
    },
    {
        id: 5,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        description: "A multi-generational saga blending magical realism with the history of Colombia.",
        rating: 4.6,
        image: OneHundredYearsofSolitude,
        category: "Magical Realism"
    },
    {
        id: 6,
        title: "Moby-Dick",
        author: "Herman Melville",
        description: "A tale of obsession and revenge as Captain Ahab hunts the elusive white whale, Moby Dick.",
        rating: 4.2,
        image: MobyDick,
        category: "Adventure"
    },
    {
        id: 7,
        title: "War and Peace",
        author: "Leo Tolstoy",
        description: "A sweeping epic that captures the lives of aristocratic families during the Napoleonic Wars.",
        rating: 4.8,
        image: WarandPeace,
        category: "Historical Fiction"
    },
    {
        id: 8,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        description: "A philosophical exploration of guilt and morality, following a man who commits a crime and seeks redemption.",
        rating: 4.6,
        image: CrimeandPunishment,
        category: "Fiction"
    },
    {
        id: 9,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A story of teenage rebellion and existential angst as Holden Caulfield struggles with life in post-war America.",
        rating: 4.0,
        image: TheCatcherintheRye,
        category: "Fiction"
    },
    {
        id: 10,
        title: "The Odyssey",
        author: "Homer",
        description: "An ancient epic following Odysseus' perilous journey home after the fall of Troy.",
        rating: 4.7,
        image: theOdyssey,
        category: "Classics"
    },
    {
        id: 11,
        title: "Frankenstein",
        author: "Mary Shelley",
        description: "A gothic horror story about a scientist's quest to create life and the tragic results that follow.",
        rating: 4.3,
        image: Frankenstein,
        category: "Horror"
    },
    {
        id: 12,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy adventure following Bilbo Baggins as he embarks on a journey to reclaim treasure guarded by a dragon.",
        rating: 4.8,
        image: TheHobbit,
        category: "Fantasy"
    },
    {
        id: 13,
        title: "Dracula",
        author: "Bram Stoker",
        description: "A gothic horror novel about the vampire Count Dracula and his attempt to move to England.",
        rating: 4.5,
        image: Dracula,
        category: "Horror"
    },
    {
        id: 14,
        title: "The Bible",
        author: "Various",
        description: "The religious scripture central to Christianity, containing historical, spiritual, and moral teachings.",
        rating: 4.9,
        image: TheBible,
        category: "Religious"
    },
    {
        id: 15,
        title: "The Quran",
        author: "Various",
        description: "The holy scripture of Islam, considered the word of God as revealed to the Prophet Muhammad.",
        rating: 4.9,
        image: TheQuran,
        category: "Religious"
    },
    {
        id: 16,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        description: "A thrilling mystery that weaves through secret societies, ancient clues, and a race against time.",
        rating: 4.2,
        image: TheDaVinciCode,
        category: "Thriller"
    },
    {
        id: 17,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        description: "An epic poem that takes readers through the realms of Hell, Purgatory, and Heaven.",
        rating: 4.8,
        image: TheDivineComedy,
        category: "Poetry"
    },
    {
        id: 18,
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        description: "A historical drama set during the French Revolution, depicting sacrifice, revenge, and resurrection.",
        rating: 4.4,
        image: ATaleofTwoCities,
        category: "Classics"
    },
    {
        id: 19,
        title: "Gone Girl",
        author: "Gillian Flynn",
        description: "A psychological thriller about a woman's mysterious disappearance and the unraveling of her marriage.",
        rating: 4.1,
        image: GoneGirl,
        category: "Thriller"
    },
    {
        id: 20,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description: "An exploration of the history of Homo sapiens, from the Stone Age to modern technological societies.",
        rating: 4.7,
        image: SapiensABriefHistoryofHumankind,
        category: "Non-fiction"
    },
    {
        id: 21,
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "A philosophical tale about a shepherd’s journey to pursue his dreams.",
        rating: 4.5,
        image: TheAlchemist,
        category: "Fiction"
    },
    {
        id: 22,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        description: "A tragic tale of love and betrayal in Russian high society.",
        rating: 4.6,
        image: AnnaKarenina,
        category: "Fiction"
    },
    {
        id: 23,
        title: "Les Misérables",
        author: "Victor Hugo",
        description: "An epic story of redemption set against the backdrop of the French Revolution.",
        rating: 4.7,
        image: LesMiserables,
        category: "Historical Fiction"
    },
    {
        id: 24,
        title: "The Iliad",
        author: "Homer",
        description: "An ancient Greek epic that tells the story of the Trojan War.",
        rating: 4.7,
        image: TheIliad,
        category: "Classics"
    },
    {
        id: 25,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        description: "A coming-of-age story of an orphaned girl navigating love and morality.",
        rating: 4.5,
        image: JaneEyre,
        category: "Fiction"
    },
    {
        id: 26,
        title: "Brave New World",
        author: "Aldous Huxley",
        description: "A dystopian vision of a future society driven by technology and consumerism.",
        rating: 4.6,
        image: BraveNewWorld,
        category: "Science Fiction"
    },
    {
        id: 27,
        title: "The Book Thief",
        author: "Markus Zusak",
        description: "A story of a young girl living in Nazi Germany who finds solace in books.",
        rating: 4.7,
        image: TheBookThief,
        category: "Historical Fiction"
    },
    {
        id: 28,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "A fantasy epic following the journey to destroy the One Ring.",
        rating: 4.9,
        image: TheLordoftheRings,
        category: "Fantasy"
    },
    {
        id: 29,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        description: "A philosophical novel about vanity, youth, and the consequences of a life of excess.",
        rating: 4.5,
        image: ThePictureofDorianGray,
        category: "Fiction"
    },
    {
        id: 30,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        description: "The comedic and tragic tale of a man who believes himself to be a knight.",
        rating: 4.4,
        image: DonQuixote,
        category: "Classics"
    },
];

interface BookListProps {
    searchTerm?: string; // Mark searchTerm as optional
    selectedCategory?: string; // Mark selectedCategory as optional
    limit?: number;
}

    const BookList = ({ searchTerm = "", selectedCategory = "All", limit = books.length }: BookListProps) => {
        const filteredBooks = books
        .filter((book) =>
            (selectedCategory === "All" || book.category === selectedCategory) &&
            (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, limit);
    
        return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
                <div className="flex items-center mb-2">
                    <User className="w-4 h-4 mr-1 text-gray-600" />
                    <span className="text-gray-600">{book.author}</span>
                </div>
                <p className="text-gray-600 mb-2">{book.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-indigo-600 font-semibold">{book.category}</span>
                    <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-gray-700">{book.rating.toFixed(1)}</span>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        );
    };
    export default BookList;