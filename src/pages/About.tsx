import { Book, Users, Globe } from 'lucide-react'

const About = () => {
    return (
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About LibraryHub</h1>
        <p className="text-xl text-gray-600 mb-8">
            LibraryHub is a cutting-edge digital library management solution designed to revolutionize the way libraries operate and serve their communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <Book className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Vast Collection</h2>
            <p className="text-gray-600">Access to millions of books across all genres and subjects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Community-Driven</h2>
            <p className="text-gray-600">Connect with readers and librarians worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Global Access</h2>
            <p className="text-gray-600">Read and manage your library from anywhere, anytime.</p>
            </div>
        </div>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-8">
            At LibraryHub, we're committed to making knowledge accessible to everyone. Our platform empowers libraries to digitize their collections, streamline operations, and reach a wider audience. We believe in the power of books to educate, inspire, and transform lives.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
        <p className="text-gray-600 mb-8">
            Whether you're a library looking to modernize your services or a book lover seeking a vast digital collection, LibraryHub is here for you. Join our growing community and be part of the future of libraries.
        </p>
        </div>
    )
}

export default About