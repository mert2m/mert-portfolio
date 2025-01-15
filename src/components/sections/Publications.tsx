import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiExternalLink, FiCalendar } from 'react-icons/fi';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  publication?: string;
}

const Publications = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Using a CORS proxy to fetch Medium RSS feed
        const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
        const MEDIUM_USERNAME = 'merttpolat';
        const RSS_URLS = [
          `https://medium.com/feed/@${MEDIUM_USERNAME}`,
          'https://medium.com/feed/devopsturkiye/author/merttpolat',
          'https://medium.com/feed/t%C3%BCrk-telekom-bulut-teknolojileri/author/merttpolat'
        ];

        const fetchPromises = RSS_URLS.map(url => 
          fetch(CORS_PROXY + encodeURIComponent(url))
            .then(response => response.text())
        );

        const responses = await Promise.all(fetchPromises);
        const parser = new DOMParser();
        
        const allArticles: Article[] = [];
        
        responses.forEach((xmlText, index) => {
          const doc = parser.parseFromString(xmlText, 'text/xml');
          const items = doc.querySelectorAll('item');
          
          items.forEach(item => {
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            
            // Determine publication based on RSS URL
            let publication = '';
            if (RSS_URLS[index].includes('devopsturkiye')) {
              publication = 'DevOps Türkiye';
            } else if (RSS_URLS[index].includes('turk-telekom-bulut-teknolojileri')) {
              publication = 'Türk Telekom Bulut';
            }
            
            allArticles.push({ title, link, pubDate, publication });
          });
        });

        // Sort articles by date
        allArticles.sort((a, b) => 
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

        setArticles(allArticles);
      } catch (err) {
        console.error('Error fetching Medium articles:', err);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getPublicationName = (link: string, publication?: string): string => {
    if (publication) {
      return publication === 'DevOps Türkiye' ? '☁️ DevOps Türkiye' : '🌐 Türk Telekom Bulut';
    }
    return '👨‍💻 Personal Blog';
  };

  return (
    <section id="publications">
      <div className="container">
        <div className="section-title">
          <h2>Publications</h2>
          <p className="section-subtitle">
            Sharing knowledge and experiences in cloud technologies, DevOps practices, and infrastructure automation
          </p>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="loading-spinner" />
            </div>
          ) : error ? (
            <div className="text-center text-red-600 dark:text-red-400">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <motion.a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        <FiBookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="text-sm text-blue-800 dark:text-blue-400">
                          {getPublicationName(article.link, article.publication)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-1 text-sm text-blue-800 dark:text-blue-400">
                        <FiCalendar className="w-4 h-4" />
                        {new Date(article.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <FiExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications; 