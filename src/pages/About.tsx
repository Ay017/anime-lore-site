import { Heart, BookOpen, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            About AniLore
          </h1>
          <p className="text-xl text-gray-300">
            Where passion for anime lore meets storytelling
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800/50 rounded-lg p-8 md:p-12 border border-red-500/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            AniLore was created for anime fans who crave more than just surface-level knowledge. We believe that understanding the origin stories, complex timelines, and intricate power systems of anime universes enhances the viewing experience and deepens our appreciation for these masterfully crafted worlds.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you're trying to understand the 2000-year timeline of Attack on Titan, unravel the mysteries of One Piece, or master the Breathing Styles in Demon Slayer, we're here to guide you through every detail with comprehensive breakdowns and analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-bold text-white">Deep Lore</h3>
            </div>
            <p className="text-gray-300">
              We dive deep into the history, mythology, and world-building of your favorite anime series, bringing you detailed explanations that make complex narratives accessible.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-500/20">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-8 h-8 text-cyan-500" />
              <h3 className="text-2xl font-bold text-white">Latest Updates</h3>
            </div>
            <p className="text-gray-300">
              Stay informed about upcoming anime movies, new seasons, and major announcements so you never miss what's coming next in your favorite universes.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-red-500/20">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white">Character Analysis</h3>
            </div>
            <p className="text-gray-300">
              Explore detailed character profiles, origin stories, and role breakdowns that help you understand the motivations and growth of key characters.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-bold text-white">Community Driven</h3>
            </div>
            <p className="text-gray-300">
              Built by fans, for fans. We're passionate about anime storytelling and committed to creating the best resource for anime lore enthusiasts.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg p-8 md:p-12 border border-red-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">What We Cover</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <div className="flex items-start">
              <span className="text-red-500 mr-3">•</span>
              <span><strong className="text-white">Origin Stories:</strong> Comprehensive explanations of how anime universes began and evolved</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-500 mr-3">•</span>
              <span><strong className="text-white">Timelines:</strong> Clear chronological breakdowns of complex narratives spanning centuries</span>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-500 mr-3">•</span>
              <span><strong className="text-white">Power Systems:</strong> Detailed guides to understanding how abilities and combat work</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-500 mr-3">•</span>
              <span><strong className="text-white">Character Profiles:</strong> In-depth looks at main characters and their development</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-500 mr-3">•</span>
              <span><strong className="text-white">Upcoming Releases:</strong> Latest news on anime movies, seasons, and special announcements</span>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-500 mr-3">•</span>
              <span><strong className="text-white">Lore Theories:</strong> Analysis and theories about unsolved mysteries and future predictions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
