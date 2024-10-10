import { Link } from 'react-router-dom'
import { Book } from 'lucide-react'

const Header = () => {
    return (
        <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <Link to="/" className="flex items-center">
            <Book className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">LibraryHub</span>
            </Link>
            <nav>
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-indigo-200">Home</Link></li>
                <li><Link to="/catalog" className="hover:text-indigo-200">Catalog</Link></li>
                <li><Link to="/about" className="hover:text-indigo-200">About</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-200">Contact</Link></li>
            </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header