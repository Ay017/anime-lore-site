import { Link } from 'react-router-dom';
import { Article } from '../types/database';
import { Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-cyan-500 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(article.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-500 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 line-clamp-3">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
