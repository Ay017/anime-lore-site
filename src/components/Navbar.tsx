import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="AniLore"
              className="h-12 hover:scale-110 transition-transform duration-200"
              onError={(e) => {
                const fallback = document.createElement('div');
                fallback.className = 'text-xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-600 bg-clip-text text-transparent';
                fallback.textContent = 'AniLore';
                (e.currentTarget as HTMLImageElement).replaceWith(fallback);
              }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              Home
            </Link>
            <Link to="/anime" className="text-gray-300 hover:text-purple-500 transition-colors duration-200">
              Universes
            </Link>
            <Link to="/characters" className="text-gray-300 hover:text-cyan-500 transition-colors duration-200">
              Characters
            </Link>
            <Link to="/upcoming" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              Upcoming
            </Link>
            <Link to="/articles" className="text-gray-300 hover:text-purple-500 transition-colors duration-200">
              Articles
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-500 transition-colors duration-200">
              About
            </Link>
            <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-red-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-red-500/20">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-gray-300 hover:text-red-500 transition-colors py-2">
              Home
            </Link>
            <Link to="/anime" className="block text-gray-300 hover:text-purple-500 transition-colors py-2">
              Universes
            </Link>
            <Link to="/characters" className="block text-gray-300 hover:text-cyan-500 transition-colors py-2">
              Characters
            </Link>
            <Link to="/upcoming" className="block text-gray-300 hover:text-red-500 transition-colors py-2">
              Upcoming
            </Link>
            <Link to="/articles" className="block text-gray-300 hover:text-purple-500 transition-colors py-2">
              Articles
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-cyan-500 transition-colors py-2">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
