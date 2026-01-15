import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimeList from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';
import Upcoming from './pages/Upcoming';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<AnimeList />} />
            <Route path="/anime/:slug" element={<AnimeDetail />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:slug" element={<CharacterDetail />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
