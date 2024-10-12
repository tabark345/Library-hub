import { Link } from 'react-router-dom'
import BookList from '../components/BookList'

const Home = () => {
    return (
        <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to LibraryHub</h1>
        <p className="text-xl text-gray-600 mb-8">Discover, explore, and manage your library with ease.</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Books</h2>
        <BookList searchTerm="" selectedCategory="All" limit={3} />
        <div className="mt-8 text-center">
            <Link to="/catalog" className="btn btn-primary">View Full Catalog</Link>
        </div>
        </div>
    )
}

export default Home
