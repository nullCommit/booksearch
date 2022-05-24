import bookImage from '../assets/book.svg';
import { MagnifyingGlass } from 'phosphor-react';

export function Header() {
  return (
    <div className='max-w-7xl h-28 mx-4 flex items-center gap-20'>
      <a href='/'>
        <div className='flex items-center gap-3'>
          <img src={bookImage} alt='book' width={65} height={65} />
          <span className='text-2xl text-brand-500 font-semibold'>
            booksearch
          </span>
        </div>
      </a>

      <div className='relative flex items-center'>
        <MagnifyingGlass className='absolute ml-3' />
        <input
          className='w-[30rem] bg-accent-300 pr-3 pl-10 py-3 rounded-md'
          placeholder='Search for title, author, type...'
        />
      </div>

      <button>Search</button>
    </div>
  );
}
