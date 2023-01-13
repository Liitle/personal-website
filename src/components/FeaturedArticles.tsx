import { RoughNotation } from 'react-rough-notation';

interface FeaturedArticlesProps {
  articles: { title: string; description: string; url: string }[];
}

const FeaturedArticles: React.FunctionComponent<FeaturedArticlesProps> = ({
  articles,
}) => {
  return (
    <section className='mt-10'>
      <h2>
        <RoughNotation type='underline' color='#FFC100' show={true}>
          What I found interesting this week
        </RoughNotation>
      </h2>
      <div className='grid grid-cols-1 gap-3 mt-10 md:grid-cols-3'>
        {articles.map((article, index) => (
          <div
            key={`article-${index}`}
            className='bg-white rounded-lg cursor-pointer dark:bg-gray-800'
          >
            <a
              href={article.url}
              target='_blank'
              className='block'
              rel='noreferrer'
            >
              <div className='p-4'>
                <p className='text-md font-medium text-indigo-500'></p>
                <p className='mb-2 text-xl font-medium text-gray-800 dark:text-white'>
                  {article.title}
                </p>
                <p className='text-md font-light text-gray-400 dark:text-gray-300'>
                  {article.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
