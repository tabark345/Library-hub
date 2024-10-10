import  { useState } from 'react'
import BookList from '../components/Booklist'
import { Search } from 'lucide-react'

const categories = ["All", "Fiction", "Science Fiction", "Romance", "Adventure", "Magical Realism", "Religious", "Mystery", "Historical Fiction", "Fantasy", "Non-fiction", "Biography", "Poetry", "Drama", "Horror", "Thriller", "Classics"]

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Book Catalog</h1>
            <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
                <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <button
                    key={category}
                    className={`px-4 py-2 rounded-lg ${
                        selectedCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    >
                    {category}
                    </button>
                ))}
                </div>
            </div>
            <BookList searchTerm={searchTerm} selectedCategory={selectedCategory} />
        </div>
    )
}

export default Catalog