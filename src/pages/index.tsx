import { Client } from '@notionhq/client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { GiTrophyCup } from 'react-icons/gi';
import { RoughNotation } from 'react-rough-notation';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import ProfilePic from '../../public/images/George-Dragan.jpg';
import ProfilePicCartoon from '../../public/images/George-Dragan-Cartoon.png';
import ElasticLogo from '../../public/logos/elastic-elasticsearch.svg';
import NodeJSLogo from '../../public/logos/NodeJSLogo.svg';
import PythonLogo from '../../public/logos/pythonLogo.svg';

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

const HomePage: React.FC<{
  featuredArticles: NotionArticle[];
}> = ({ featuredArticles }) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const articles = featuredArticles.slice(0, 3).map((entry) => ({
    title: entry.properties.Name.title[0].plain_text,
    url: entry.properties.URL.url,
    description: entry.properties.Description.rich_text[0]?.plain_text,
  }));
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {mounted && <Header />}
      <main>
        <section>
          <div className='flex justify-between items-center'>
            <div>
              <div className='mb-8'>
                <h1 className='font-mono text-gray-800 dark:text-gray-100'>
                  George Drăgan
                </h1>
                <sub>
                  Software Developer at{' '}
                  <a
                    className='hover:underline'
                    href='https://www.qcatalyst.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <b>QCatalyst</b>
                  </a>
                </sub>
              </div>
              <p className='mt-2 max-w-lg text-gray-500 dark:text-gray-300'>
                Part of{' '}
                <RoughNotation type='circle' color='#FFC100' show={true}>
                  amazing teams{' '}
                </RoughNotation>{' '}
                building beautiful products! Passionate about easily
                maintainable technologies{' '}
                <RoughNotation type='underline' color='red' show={true}>
                  that deliver products fast!
                </RoughNotation>
              </p>
            </div>
            <div className='flex flex-col'>
              {theme === 'dark' ? (
                <Image
                  className='rounded-full'
                  src={ProfilePicCartoon}
                  alt='Picture of George Dragan'
                  width={200}
                  height={200}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              ) : (
                <Image
                  className='rounded-full'
                  src={ProfilePic}
                  alt='Picture of George Dragan'
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              )}
              <div className='flex justify-center my-4'>
                <a
                  className='ml-3'
                  href='https://www.instagram.com/georgedragan01/'
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
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
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
              </div>
            </div>
          </div>
        </section>

        <section className='wrap flex flex-wrap justify-between p-6 mt-12 rounded-lg shadow-lg dark:bg-gray-800'>
          <svg
            className='fill-blue-500 m-1'
            xmlns='http://www.w3.org/2000/svg'
            height='42'
            version='1.1'
            viewBox='0 0 512 512'
          >
            <title>TypeScript logo</title>
            <rect width='512' height='512' rx='50' />
            <path
              d='m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z'
              clipRule='evenodd'
              // fill='#fff'
              className='fill-white'
              fillRule='evenodd'
            />
          </svg>

          <svg
            className='fill-cyan-500 m-1'
            // width='42px'
            height='42px'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 841.9 595.3'
          >
            <g>
              <path
                d='M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
		c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
		c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6
		c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11
		c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6
		c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4
		c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6
		c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5
		c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2
		c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8
		c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9
		c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3
		c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z
		 M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z
		 M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z
		 M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z
		 M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z
		 M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
		c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7
		c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
		C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
		c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1
		c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
		C644,312.2,621.1,332.1,585.7,347.1z'
              />
              <polygon points='320.8,78.4 320.8,78.4 320.8,78.4 	' />
              <circle cx='420.9' cy='296.5' r='45.7' />
              <polygon points='520.5,78.1 520.5,78.1 520.5,78.1 	' />
            </g>
          </svg>

          <svg
            className='fill-black m-1 dark:fill-white'
            // width='42px'
            height='42px'
            viewBox='0 0 207 124'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>next-black</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id='Page-1' stroke='none' strokeWidth='1'>
              <g
                id='Black-Next.js'
                transform='translate(-247.000000, -138.000000)'
              >
                <g
                  id='next-black'
                  transform='translate(247.000000, 138.000000)'
                >
                  <g id='EXT-+-Type-something'>
                    <path
                      d='M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z'
                      id='EXT'
                    ></path>
                    <polygon
                      id='Type-something'
                      points='0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303'
                    ></polygon>
                  </g>
                  <path
                    d='M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z'
                    id='.JS'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <svg
            className='fill-red-500 m-1'
            viewBox='0 0 105 22'
            xmlns='http://www.w3.org/2000/svg'
            height='42px'
          >
            <title>Sanity</title>
            <path
              opacity='0.7'
              d='M78.1793 7.99261V21.0028H73.9031V10.2138L78.1793 7.99261Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.7'
              d='M20.9511 21.33L30.944 16.1051L29.7121 12.9141L23.1332 15.9821L20.9511 21.33Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.5'
              d='M73.9031 10.2027L84.7443 4.65477L82.9126 1.5571L73.9031 5.95997V10.2027Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.7'
              d='M43.3705 6.96233V21.0028H39.2927V1.00714L43.3705 6.96233Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.5'
              d='M27.1299 6.18617L20.9511 21.33L17.7731 18.5943L25.1353 1.00714L27.1299 6.18617Z'
              // fill='currentColor'
            ></path>
            <path
              d='M25.1353 1.00714H29.3477L37.1386 21.0028H32.8269L25.1353 1.00714Z'
              // fill='currentColor'
            ></path>
            <path
              d='M44.0012 1.00714L52.9824 14.6682V21.0028L39.2927 1.00714H44.0012Z'
              // fill='currentColor'
            ></path>
            <path
              d='M64.9183 1.00714H60.6739V21.0063H64.9183V1.00714Z'
              // fill='currentColor'
            ></path>
            <path
              d='M73.9031 4.65474H67.37V1.00714H82.5867L84.7443 4.65474H78.1793H73.9031Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.5'
              d='M97.2754 13.4153V21.0028H93.0629V13.4153'
              // fill='currentColor'
            ></path>
            <path
              d='M93.0629 13.4152L100.191 1.00714H104.666L97.2754 13.4152H93.0629Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.7'
              d='M93.063 13.4152L85.7363 1.00714H90.3456L95.3092 9.51008L93.063 13.4152Z'
              // fill='currentColor'
            ></path>
            <path
              d='M1.96126 3.31479C1.96126 6.09921 3.71145 7.75595 7.21536 8.62956L10.9283 9.47533C14.2444 10.2236 16.2639 12.0822 16.2639 15.1103C16.2897 16.4295 15.8531 17.7173 15.0274 18.7579C15.0274 15.7368 13.4367 14.1044 9.59972 13.1229L5.95409 12.3085C3.03475 11.6541 0.781478 10.1262 0.781478 6.83709C0.766123 5.56693 1.18116 4.32781 1.96126 3.31479'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.7'
              d='M52.9824 13.6415V1.00714H57.0602V21.0028H52.9824V13.6415Z'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.7'
              d='M12.7458 14.3689C14.3294 15.3643 15.0238 16.7565 15.0238 18.7544C13.713 20.4041 11.4101 21.33 8.70333 21.33C4.14718 21.33 0.958577 19.1268 0.25 15.2982H4.62547C5.18878 17.0559 6.68034 17.8703 8.67144 17.8703C11.1019 17.8703 12.7174 16.5964 12.7493 14.3619'
              // fill='currentColor'
            ></path>
            <path
              opacity='0.7'
              d='M4.23567 7.44267C3.5125 7.02045 2.9192 6.41375 2.51873 5.68697C2.11827 4.96019 1.92558 4.14045 1.96113 3.31476C3.22594 1.67891 5.42608 0.679993 8.10804 0.679993C12.7492 0.679993 15.4347 3.08852 16.0972 6.47856H11.8883C11.4242 5.14203 10.2621 4.10136 8.14347 4.10136C5.87957 4.10136 4.33487 5.39611 4.24629 7.44267'
              // fill='currentColor'
            ></path>
          </svg>
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            viewBox='0 0 590.96881 159.0246'
            height='42px'
            id='svg3030'
          >
            <defs id='defs3032' />
            <g transform='translate(-115.94417,-501.42131)' id='layer1'>
              <path
                d='m 414.48046,501.42155 c -0.40947,0.005 -0.82364,0.10273 -1.18907,0.31708 -0.72963,0.42837 -1.18908,1.21508 -1.18908,2.06106 l 0,60.64254 c 0,0.59586 -0.27746,1.12831 -0.79271,1.42714 -0.51655,0.29958 -1.14689,0.29958 -1.6647,0 l -9.90893,-5.70755 c -1.47635,-0.85131 -3.27961,-0.8508 -4.75629,0 L 355.42323,582.992 c -1.47889,0.85309 -2.37815,2.49432 -2.37815,4.20126 l 0,45.66036 c 0,1.70566 0.90053,3.2675 2.37815,4.12211 l 39.55645,22.83018 c 1.47889,0.85334 3.2774,0.85334 4.75629,0 l 39.55645,-22.83018 c 1.47762,-0.85461 2.37815,-2.41645 2.37815,-4.12211 l 0,-113.83381 c 0,-1.73162 -0.94492,-3.35667 -2.45742,-4.20139 l -23.54362,-13.15906 c -0.36972,-0.20623 -0.7796,-0.24225 -1.18907,-0.23768 z M 160.0191,558.4176 c -0.75434,0.0304 -1.46304,0.16234 -2.14033,0.55502 l -39.55646,22.83018 c -1.47394,0.85207 -2.37814,2.40402 -2.37814,4.12212 l 0.0791,61.2767 c 0,0.85233 0.43971,1.64377 1.18908,2.06131 0.73449,0.43961 1.64613,0.43961 2.37814,0 l 23.46435,-13.4764 c 1.48635,-0.88302 2.45741,-2.41898 2.45741,-4.12211 l 0,-28.61687 c 0,-1.70694 0.89794,-3.27359 2.37815,-4.12212 l 9.9882,-5.78668 c 0.74548,-0.43099 1.54581,-0.63418 2.37814,-0.63418 0.81525,0 1.65329,0.20294 2.37815,0.63418 l 9.9882,5.78668 c 1.48016,0.84853 2.37814,2.41518 2.37814,4.12212 l 0,28.61687 c 0,1.70313 0.98076,3.24899 2.45742,4.12211 l 23.46435,13.4764 c 0.73691,0.43961 1.64727,0.43961 2.37814,0 0.72836,-0.41754 1.18907,-1.20898 1.18907,-2.06131 l 0.0791,-61.2767 c 0,-1.7181 -0.89418,-3.27005 -2.37814,-4.12212 L 162.6348,558.97262 c -0.66905,-0.39268 -1.38089,-0.52408 -2.14033,-0.55502 l -0.47563,0 z m 355.45319,0.55502 c -0.8264,-10e-4 -1.63617,0.20801 -2.37815,0.63417 l -39.55645,22.83018 c -1.47762,0.85334 -2.37814,2.41518 -2.37814,4.12212 l 0,45.66035 c 0,1.71683 0.96711,3.2736 2.45741,4.12212 l 39.23937,22.35455 c 1.44908,0.82747 3.21842,0.88936 4.67701,0.0786 l 23.78144,-13.23846 c 0.75466,-0.41856 1.26517,-1.20036 1.26834,-2.06106 0.005,-0.86095 -0.44392,-1.63261 -1.18907,-2.06106 l -39.79427,-22.83018 c -0.74515,-0.42489 -1.26834,-1.28584 -1.26834,-2.14045 l 0,-14.26886 c 0,-0.85309 0.52953,-1.6349 1.26834,-2.06081 l 12.36635,-7.13468 c 0.73564,-0.42566 1.63933,-0.42566 2.37814,0 l 12.36635,7.13468 c 0.73881,0.42591 1.18907,1.20772 1.18907,2.06081 l 0,11.2568 c 0,0.85435 0.45026,1.63489 1.18907,2.0608 0.74198,0.42718 1.63934,0.42895 2.37815,0 l 23.70216,-13.79298 c 1.47128,-0.85461 2.37814,-2.42051 2.37814,-4.12211 l 0,-11.01886 c 0,-1.70187 -0.90369,-3.26751 -2.37814,-4.12212 l -39.31864,-22.83018 c -0.74041,-0.4292 -1.55174,-0.63315 -2.37814,-0.63417 z m -118.27301,34.08673 c 0.20623,0 0.44899,0.0507 0.63417,0.15727 l 13.55542,7.848 c 0.36782,0.21308 0.63417,0.60551 0.63417,1.0304 l 0,15.69575 c 0,0.42616 -0.26381,0.81884 -0.63417,1.03066 l -13.55542,7.84774 c -0.36909,0.21055 -0.81998,0.21055 -1.18907,0 l -13.55542,-7.84774 c -0.36909,-0.21308 -0.63417,-0.6045 -0.63417,-1.03066 l 0,-15.69575 c 0,-0.42489 0.26635,-0.8163 0.63417,-1.0304 l 13.55542,-7.84673 c 0.18518,-0.10654 0.34864,-0.15727 0.5549,-0.15727 z'
                id='path22'
                // style='fill:#404137;fill-opacity:1;fill-rule:evenodd;stroke:none'
              />
              <path
                d='m 633.98311,557.86282 c -1.37141,0 -2.70474,0.2836 -3.8843,0.95126 l -37.33686,21.56183 c -2.41619,1.39112 -3.8843,4.02065 -3.8843,6.81735 l 0,43.04452 c 0,2.79518 1.46811,5.42166 3.8843,6.8171 l 9.75039,5.6284 c 4.73726,2.33476 6.48441,2.29874 8.64059,2.29874 7.01394,0 11.01873,-4.2558 11.01873,-11.65278 l 0,-42.48949 c 0,-0.60069 -0.52002,-1.03066 -1.1098,-1.03066 l -4.67701,0 c -0.5993,0 -1.10981,0.42997 -1.10981,1.03066 l 0,42.48949 c 0,3.27867 -3.41501,6.57586 -8.95767,3.80503 l -10.14674,-5.94523 c -0.35831,-0.19532 -0.63418,-0.54006 -0.63418,-0.95126 l 0,-43.04452 c 0,-0.40866 0.2727,-0.82366 0.63418,-1.0304 l 37.25758,-21.48269 c 0.34879,-0.2004 0.76417,-0.2004 1.1098,0 l 37.25758,21.48269 c 0.35514,0.21308 0.63417,0.60931 0.63417,1.0304 l 0,43.04452 c 0,0.4112 -0.20623,0.83229 -0.5549,1.03041 l -37.33685,21.48269 c -0.32026,0.19025 -0.76101,0.19025 -1.1098,0 l -9.59185,-5.70755 c -0.28538,-0.16742 -0.67539,-0.15474 -0.95126,0 -2.64766,1.50096 -3.14549,1.67548 -5.62827,2.53669 -0.61197,0.21308 -1.54104,0.54463 0.31709,1.58543 l 12.52489,7.37212 c 1.19224,0.68997 2.52083,1.0304 3.8843,1.0304 1.38249,0 2.69206,-0.34043 3.8843,-1.0304 l 37.33685,-21.48269 c 2.4162,-1.40533 3.8843,-4.02192 3.8843,-6.8171 l 0,-43.04452 c 0,-2.7967 -1.4681,-5.42039 -3.8843,-6.81735 l -37.33685,-21.56183 c -1.17005,-0.66766 -2.51289,-0.95126 -3.8843,-0.95126 z M 278.847,558.73468 c -0.82427,0 -1.63996,0.20801 -2.37814,0.63417 l -39.55645,22.75104 c -1.47889,0.85232 -2.37815,2.49584 -2.37815,4.20126 l 0,45.66035 c 0,1.70745 0.90022,3.26802 2.37815,4.12212 l 39.55645,22.83018 c 1.47889,0.8541 3.2774,0.8541 4.75629,0 l 39.55645,-22.83018 c 1.47635,-0.8541 2.37815,-2.41467 2.37815,-4.12212 l 0,-45.66035 c 0,-1.70795 -0.89926,-3.34894 -2.37815,-4.20126 l -39.55645,-22.75104 c -0.73818,-0.42616 -1.55388,-0.63417 -2.37815,-0.63417 z m 410.54685,0.23845 0,1.1098 3.09159,0 0,8.16483 1.26834,0 0,-8.16483 3.17086,0 0,-1.1098 -7.53079,0 z m 8.64059,0 0,9.27463 1.18907,0 0,-5.4696 c 0,-0.22323 0.0101,-0.56847 0,-1.0304 -0.0152,-0.47056 0,-0.88074 0,-1.11006 l 0,-0.23844 2.61596,7.84774 1.26834,0 2.69523,-7.84774 c 0,0.49922 -0.0667,0.98119 -0.0791,1.42688 -0.005,0.43377 0,0.75949 0,0.95126 l 0,5.4696 1.18907,0 0,-9.27463 -1.74397,0 -2.69523,7.848 -2.61596,-7.848 -1.82324,0 z m -54.06313,29.64752 c -10.63189,0 -16.96409,4.52469 -16.96409,12.04926 0,8.16281 6.28464,10.40549 16.48846,11.41509 12.20781,1.19504 13.15906,2.98746 13.15906,5.39046 0,4.16803 -3.32306,5.94523 -11.17727,5.94523 -9.86771,0 -12.03658,-2.46337 -12.76271,-7.37211 -0.0855,-0.52637 -0.49148,-0.95126 -1.03052,-0.95126 l -4.83556,0 c -0.59612,0 -1.1098,0.51266 -1.1098,1.1098 0,6.28337 3.41818,13.71409 19.73859,13.71409 11.81462,0 18.62879,-4.63757 18.62879,-12.76283 0,-8.055 -5.50461,-10.21702 -16.96409,-11.73218 -11.57998,-1.53216 -12.68343,-2.282 -12.68343,-4.99397 0,-2.23863 0.9354,-5.23217 9.51257,-5.23217 7.66079,0 10.49237,1.65214 11.6529,6.8176 0.10147,0.48552 0.52954,0.87185 1.03053,0.87185 l 4.83556,0 c 0.29806,0 0.58661,-0.18264 0.79272,-0.39648 0.20293,-0.2283 0.34562,-0.48552 0.31708,-0.79246 -0.74832,-8.89591 -6.681,-13.07992 -18.62879,-13.07992 z m -128.57829,10.86032 c -0.15804,0 -0.33294,0 -0.47563,0.0786 l -7.61006,4.4392 c -0.28538,0.16235 -0.47563,0.46446 -0.47563,0.79271 l 0,8.71986 c 0,0.32825 0.19025,0.6291 0.47563,0.79272 l 7.61006,4.3598 c 0.28537,0.16488 0.58978,0.16488 0.87198,0 l 7.61006,-4.3598 c 0.28221,-0.16235 0.47563,-0.46447 0.47563,-0.79272 l 0,-8.71986 c 0,-0.32825 -0.19329,-0.62935 -0.47563,-0.79271 l -7.61006,-4.4392 c -0.14104,-0.0837 -0.23819,-0.0786 -0.39635,-0.0786 z'
                id='path28'
                // style='fill:#83cd29;fill-opacity:1;fill-rule:evenodd;stroke:none'
              />
            </g>
          </svg> */}
          <Image src={NodeJSLogo} alt='NodeJS Logo' height={42} />
          <Image
            className='m-1'
            src={PythonLogo}
            alt='Python Logo'
            height={42}
            width={42}
          />
          <Image
            className='m-1'
            src={ElasticLogo}
            alt='Elastic Search'
            height={42}
          />
        </section>
        {articles.length > 0 && (
          <section className='mt-12'>
            <h2>What I found interesting this week:</h2>
            <div className='flex justify-between mt-12'>
              {articles.map((article, index) => (
                <div
                  key={`article-${index}`}
                  className='h-90 overflow-hidden m-auto w-60 rounded-lg shadow-lg cursor-pointer md:w-80'
                >
                  <a
                    href={article.url}
                    target='_blank'
                    className='block w-full h-full'
                    rel='noreferrer'
                  >
                    <div className='p-4 w-full bg-white dark:bg-gray-800'>
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
        )}
        <section className='mt-12'>
          <h2>My journey so far:</h2>
          <div className='flex justify-center dark:text-white'>
            <div className=''>
              <div className='container mx-auto w-full h-full'>
                <div className='wrap overflow-hidden relative p-10 h-full'>
                  <div
                    className='border-2-2 border-yellow-555 absolute h-full border'
                    style={{
                      right: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>
                  <div
                    className='border-2-2 border-yellow-555 absolute h-full border'
                    style={{
                      left: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>

                  <div className='left-timeline flex flex-row-reverse justify-between items-center mb-8 w-full'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 px-1 py-4 w-5/12 text-right'>
                      <p className='mb-3 text-lg text-yellow-600 dark:text-yellow-300'>
                        2021
                      </p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        NextJS, Sanity,Elastic Search and Lambda Functions For
                        Explorer Dashboard
                      </h4>
                      <p className='text-sm leading-snug text-opacity-100 md:text-base dark:text-gray-50'>
                        Starting an exciting project that aims to deliver our
                        high quality resources to explorers around the world!
                      </p>
                    </div>
                  </div>
                  <div className='right-timeline flex justify-between items-center mb-8 w-full'>
                    <div className='order-1 w-5/12'></div>

                    <div className='relative order-1 px-1 py-4 w-5/12 text-left'>
                      <div className='flex flex-wrap items-center'>
                        <p className='mr-2 mb-3 text-lg text-yellow-600 dark:text-yellow-300'>
                          2020
                        </p>
                        <div className='group flex'>
                          <GiTrophyCup
                            size={35}
                            className='hidden text-yellow-500 animate-bounce lg:block group-hover:animate-none hover:animate-none'
                          ></GiTrophyCup>
                          <span className='p-2 text-white bg-yellow-400 rounded-lg shadow-lg lg:hidden group-hover:block hover:block'>
                            Got a{' '}
                            <a
                              className='underline lg:no-underline	hover:underline'
                              href='https://winners.webbyawards.com/2021/websites-and-mobile-sites/general-websites-and-mobile-sites/corporate-social-responsibility/181725/field-notes'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <b> 🎉 Webby Award 🎉 </b>
                            </a>
                          </span>
                        </div>
                      </div>

                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Let the Frontend Begin
                      </h4>
                      <p className='text-sm leading-snug text-opacity-100 md:text-base dark:text-gray-50'>
                        Started working more heavily on frontend. React, Gatsby
                        and than NextJS with a sprinkle o Node and Prisma for
                        building a beautifully expedition/journey tracker for
                        explorers.
                      </p>
                    </div>
                  </div>
                  <div className='left-timeline flex flex-row-reverse justify-between items-center mb-8 w-full'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 px-1 py-4 w-5/12 text-right'>
                      <p className='mb-3 text-lg text-yellow-600 dark:text-yellow-300'>
                        2019
                      </p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        AirFlow, Scrapy and Docker Swarm for a scraping
                        infrastructure that fights against insurance froude
                      </h4>
                      <p className='text-sm leading-snug text-opacity-100 md:text-base dark:text-gray-50'>
                        Extracting data from the major automotive selling
                        websites in search for fraudulent sales postings. Data
                        monitoring and validation were the primary focus.
                      </p>
                    </div>
                  </div>
                  <div className='right-timeline flex justify-between items-center mb-8 w-full'>
                    <div className='order-1 w-5/12'></div>

                    <div className='order-1 px-1 py-4 w-5/12'>
                      <p className='mb-3 text-lg text-yellow-600 dark:text-yellow-300'>
                        2018
                      </p>
                      <h4 className='mb-3 text-lg font-bold text-left md:text-2xl'>
                        Python, Crawling and Hadoop for surfacing client
                        satisfaction in accommodation industry
                      </h4>
                      <p className='text-sm leading-snug text-opacity-100 md:text-base dark:text-gray-50'>
                        Making my way around a big distributed crawling
                        infrastructure, extracting data, building reports and
                        learning a lot of stuff
                      </p>
                    </div>
                  </div>
                  <div className='left-timeline flex flex-row-reverse justify-between items-center mb-8 w-full'>
                    <div className='order-1 w-5/12'></div>

                    <div className='order-1 px-1 py-4 w-5/12 text-right'>
                      <p className='mb-3 text-lg text-yellow-600 dark:text-yellow-300'>
                        2017
                      </p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Let the Programming begin
                      </h4>
                      <p className='text-sm leading-snug text-opacity-100 md:text-base dark:text-gray-50'>
                        From a statistic and political science background
                        started learning Python, JavaScript and SQL. Excited to
                        work with big data technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
  const response = await notion.databases.query({
    database_id: '35b243154a6f40208e46667b499d7e70',
    sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }],
  });

  return {
    props: { featuredArticles: response.results },
    revalidate: 60 * 60 * 24,
  };
};
