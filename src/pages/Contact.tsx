import  { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData)
        alert('Thank you for your message. We will get back to you soon!')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
            <p className="text-xl text-gray-600 mb-8">
                We'd love to hear from you. Please fill out the form below or use our contact information to get in touch.
            </p>
            <div className="space-y-4">
                <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600 mr-2" />
                <span>info@libraryhub.com</span>
                </div>
                <div className="flex items-center">
                <Phone className="w-6 h-6 text-indigo-600 mr-2" />
                <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-2" />
                <span>123 Library Street, Booktown, BK 12345</span>
                </div>
            </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-lg"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
        </div>
        </div>
    )
}

export default Contact