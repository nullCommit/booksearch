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
  };
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <div className='w-[43rem] h-36 flex items-center relative gap-3 my-4 overflow-hidden'>
      {content.imageLinks ? (
        <img
          src={content.imageLinks.thumbnail}
          alt={content.title}
          className='opacity-40 w-[7.5rem]'
        />
      ) : (
        <img
          src={cameraImage}
          alt='No image'
          className='opacity-40 w-[7.5rem]'
        />
      )}

      <div>
        <h1 className='font-bold text-xl'>{content.title}</h1>

        <ul className='my-2 text-shadowText-100'>
          <li className='flex items-center gap-2 mb-1'>
            <User weight='bold' />
            <span>{content.authors}</span>
          </li>

          <li className='flex items-center gap-2 mb-1'>
            <Calendar weight='bold' />
            <span>{content.publishedDate}</span>
          </li>

          <li className='flex items-center gap-2'>
            <Link weight='bold' />
            <span>See more</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
