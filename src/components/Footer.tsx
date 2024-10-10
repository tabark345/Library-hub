import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">LibraryHub</h3>
                <p className="text-gray-400">Empowering readers and libraries worldwide.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                <ul className="text-gray-400">
                <li><Link to='/' className="hover:text-white">Home</Link></li> 
                <li><Link to='/Catalog' className="hover:text-white">Catalog</Link></li> 
                <li><Link to='/About' className="hover:text-white">About</Link></li> 
                <li><Link to='/Contact' className="hover:text-white">Contact</Link></li> 
                
                </ul>
            </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 LibraryHub. All rights reserved.</p>
            </div>
        </div>
        </footer>
    )
}

export default Footer