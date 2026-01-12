import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Article } from '../types/database';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      const { data } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (data) setArticle(data);
      setLoading(false);
    }

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-4">Article not found</p>
          <Link to="/articles" className="text-cyan-500 hover:text-cyan-400">
            Return to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image_url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <article className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl">
          <Link
            to="/articles"
            className="inline-flex items-center text-gray-400 hover:text-cyan-500 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(article.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </article>

        <div className="mt-8 pb-12">
          <Link
            to="/articles"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
