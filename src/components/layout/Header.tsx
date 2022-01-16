import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Not sure why we do this; to not render it on server side ? not sure
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header>
      <div
        className='flex flex-col justify-center items-center my-4 rounded'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='mr-2 h-10 rounded focus:outline-none'
        >
          {mounted && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              stroke='currentColor'
              className='w-6 h-6 text-yellow-500 dark:text-yellow-500'
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              )}
            </svg>
          )}
        </button>
        <span className='font-mono text-xs font-extrabold uppercase'>
          {'Switch'}
        </span>
      </div>
      {/* <nav>
        <ul className='flex justify-center'>
          <li className='p-4 dark:hover:bg-gray-700 hover:bg-gray-200'>
            About
          </li>
          <li className='p-4 dark:hover:bg-gray-700 hover:bg-gray-200'>
            Dashboard
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
