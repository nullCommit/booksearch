import { User, Calendar, Link, Camera } from 'phosphor-react';
import cameraImage from '../assets/camera.svg';

export function ContentCard() {
  return (
    <div className='w-[43rem] h-36 flex items-center relative gap-3 my-4'>
      <img src={cameraImage} alt='' className='opacity-40 w-[7.5rem]' />

      <div>
        <h1 className='font-bold text-2xl'>Book Title</h1>

        <ul className='my-2 text-shadowText-100'>
          <li className='flex items-center gap-2 mb-1'>
            <User weight='bold' />
            <span>Joseph Oliveira</span>
          </li>

          <li className='flex items-center gap-2 mb-1'>
            <Calendar weight='bold' />
            <span>26 Mar 2022</span>
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
