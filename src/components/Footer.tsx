import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-red-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              AniLore
            </div>
            <p className="text-gray-400 max-w-md">
              Your ultimate destination for anime lore, origin stories, timelines, and the latest updates on upcoming releases.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/anime" className="text-gray-400 hover:text-red-500 transition-colors">
                  Anime Universes
                </Link>
              </li>
              <li>
                <Link to="/characters" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="/upcoming" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Upcoming Releases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-red-500 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AniLore. Built for anime fans who love deep lore and storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
}
