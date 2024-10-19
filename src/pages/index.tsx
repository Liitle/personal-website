import { Client } from '@notionhq/client';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import FeaturedArticles from '@/components/FeaturedArticles';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Timeline from '@/components/Timeline';

import ProfilePicDay from '../../public/images/George-Dragan-Cartoon-Day.png';
import ProfilePicNight from '../../public/images/George-Dragan-Cartoon-Night.png';

interface NotionArticle {
  properties: {
    Name: {
      title: {
        plain_text: string;
      }[];
    };
    URL: { url: string };
    Description: {
      rich_text: {
        plain_text: string;
      }[];
    };
  };
}

interface NotionJourneyItem {
  properties: {
    Name: {
      title: {
        plain_text: string;
      }[];
    };
    Achievement: {
      rich_text: {
        plain_text: string;
      }[];
    };
    Description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    Date: {
      date: {
        start: string;
      };
    };
  };
}

const HomePage: React.FC<{
  notionArticles: NotionArticle[];
  notionJourney: NotionJourneyItem[];
}> = ({ notionArticles, notionJourney }) => {
  const { theme, setTheme } = useTheme();
  const articles = notionArticles?.slice(0, 3).map((article) => ({
    title: article.properties.Name?.title[0].plain_text,
    url: article.properties.URL?.url,
    description: article.properties.Description?.rich_text[0]?.plain_text,
  }));

  const journey = notionJourney?.map((journeyItem) => ({
    title: journeyItem.properties.Name?.title[0].plain_text,
    description: journeyItem.properties.Description?.rich_text[0]?.plain_text,
    achivement: journeyItem.properties.Achievement?.rich_text[0]?.plain_text,
    year: dayjs(journeyItem.properties.Date?.date.start).year(),
  }));

  return (
    <Layout>
      <Seo />
      <main>
        <section className='mt-10'>
          <div className='flex flex-col items-center'>
            <div
              className='cursor-pointer'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Image
                  className='rounded-full'
                  src={ProfilePicNight}
                  alt='Picture of George Dragan'
                  width={200}
                  height={200}
                />
              ) : (
                <Image
                  className='rounded-full'
                  src={ProfilePicDay}
                  alt='Picture of George Dragan'
                  width={200}
                  height={200}
                />
              )}
            </div>

            <h1 className='text-brand-primary dark:text-brand-accent'>
              George Drăgan
            </h1>
            <span className='font-subtitle'>
              Software Developer | Tech Lead at{' '}
              <a
                className='hover:underline'
                href='https://www.qcatalyst.com'
                target='_blank'
                rel='noreferrer'
              >
                <b>QC</b>
              </a>
            </span>

            <div className='grid grid-flow-col auto-cols-max mt-2'>
              <a
                href='https://www.linkedin.com/in/george-dragan/'
                target='_blank'
                rel='noreferrer'
                className='ml-3'
              >
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='0'
                  className='w-6 h-6 text-blue-500'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
              <a
                className='ml-3'
                href='https://www.instagram.com/__george__d__/'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-6 h-6 text-pink-400'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
            </div>
            <div className='flex relative flex-col items-center'>
              <div className='-z-10 bg-brand-secondary absolute top-full left-1/2 w-1 h-64 transform -translate-x-1/2'></div>
              <p className='bg-brand-secondary font-subtitle h5 p-6 mt-10 max-w-lg text-white rounded-lg shadow-lg'>
                Working with amazing people to build beautiful and maintainable
                tech. I value pragmatism over perfection when finding solutions.
              </p>
            </div>
          </div>
        </section>

        <Timeline journey={journey} />

        {articles.length > 0 ? <FeaturedArticles articles={articles} /> : null}
      </main>
    </Layout>
  );
};

export default HomePage;
// This also gets called at build time

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const featuredArticles = await notion.databases.query({
    database_id: '35b243154a6f40208e46667b499d7e70',
    sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }],
  });

  const journey = await notion.databases.query({
    database_id: '3134f12ce36d4a3bb72dfa7e9caa5b50',
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });
  return {
    props: {
      notionArticles: featuredArticles.results,
      notionJourney: journey.results,
    },
    revalidate: 60 * 60 * 24,
  };
};
