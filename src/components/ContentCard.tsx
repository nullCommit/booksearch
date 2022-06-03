import { User, Calendar, Link, Camera } from 'phosphor-react';
import cameraImage from '../assets/camera.svg';

interface ContentCardProps {
  content: {
    title: string;
    authors: string[];
    publishedDate: string;
    imageLinks?: {
      thumbnail: string;
    };
    infoLink: string;
  };
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <div className='w-[22rem] h-36 flex items-center relative gap-3 my-4 overflow-hidden md:w-[35rem] lg:w-[43rem]'>
      {content.imageLinks ? (
        <img
          src={content.imageLinks.thumbnail}
          alt={content.title}
          className='w-[6rem] md:w-[6.5rem] lg:w-[7.5rem]'
        />
      ) : (
        <img
          src={cameraImage}
          alt='No image'
          className='opacity-40 w-[6rem] md:w-[6.5rem] lg:w-[7.5rem]'
        />
      )}

      <div>
        <h1 className='font-bold text-base md:text-xl'>{content.title}</h1>

        <ul className='my-2 text-shadowText-100'>
          <li className='flex items-center gap-2 mb-1'>
            <User weight='bold' className='text-sm md:text-base' />
            <span className='text-sm md:text-base'>{content.authors}</span>
          </li>

          <li className='flex items-center gap-2 mb-1'>
            <Calendar weight='bold' className='text-sm md:text-base' />
            <span className='text-sm md:text-base'>
              {content.publishedDate}
            </span>
          </li>

          {content.infoLink && (
            <li className='flex items-center gap-2'>
              <Link weight='bold' className='text-sm md:text-base' />
              <a
                href={content.infoLink}
                className='text-sm md:text-base'
                target='_blank'
              >
                See more
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
