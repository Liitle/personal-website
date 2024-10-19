import classNames from 'classnames';
import { GiTrophyCup } from 'react-icons/gi';

interface TimelineProps {
  journey: {
    title: string;
    year: number;
    description: string;
    achivement?: string;
  }[];
}

const Timeline: React.FunctionComponent<TimelineProps> = ({ journey }) => {
  return (
    <section className='mt-10'>
      <h2>My journey so far:</h2>
      <div className='flex justify-center mt-10 dark:text-white'>
        <div className=''>
          <div className='container mx-auto w-full h-full'>
            <div className='wrap overflow-hidden relative h-full'>
              <div
                className='border-2-2 border-brand-secondary absolute h-full border'
                style={{
                  right: '50%',
                  // border: '2px solid #FFC100',
                  // borderRadius: '1%',
                }}
              ></div>
              <div
                className='border-2-2 border-brand-secondary absolute h-full border'
                style={{
                  left: '50%',
                  // border: '2px solid #FFC100',
                  // borderRadius: '1%',
                }}
              ></div>

              {journey.map((journeyItem, index) => (
                <div
                  key={`journeyItem-${index}`}
                  className={classNames(
                    'flex justify-between items-center mb-8 w-full',
                    {
                      'left-timeline flex-row-reverse': index % 2 == 0,
                      'right-timeline': index % 2 != 0,
                    }
                  )}
                >
                  <div className='order-1 w-5/12'></div>

                  <div className='relative order-1 px-1 py-4 w-5/12 text-left'>
                    <p className='text-brand-secondary mr-2 mb-3 text-lg'>
                      {journeyItem.year}
                    </p>
                    <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                      {journeyItem.title}
                    </h4>
                    <p className='text-sm leading-snug text-opacity-100 md:text-base dark:text-gray-50'>
                      {journeyItem.description}
                    </p>
                    {journeyItem.achivement ? (
                      <div className='flex my-4'>
                        <GiTrophyCup
                          size={35}
                          className='text-brand-secondary animate-bounce'
                        ></GiTrophyCup>
                        <span className='bg-brand-secondary p-2 text-white rounded-lg shadow-lg'>
                          {journeyItem.achivement}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
