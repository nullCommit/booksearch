import { FormEvent, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import bookImage from '../assets/book.svg';

export function Header() {
  const [search, setSearch] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    return;
  }

  return (
    <div className='max-w-7xl h-28 mx-4 flex items-center gap-20 '>
      <a
        href='/'
        className='focus:outline-none focus:ring focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826]'
      >
        <div className='flex items-center gap-3'>
          <img src={bookImage} alt='book' width={65} height={65} />
          <span className='text-2xl text-brand-500 font-semibold'>
            booksearch
          </span>
        </div>
      </a>

      <form onSubmit={handleSubmit} className='flex gap-10 '>
        <div className='relative flex items-center text-shadowText-300 focus-within:text-brand-500'>
          <MagnifyingGlass className='absolute ml-3' />
          <input
            type='text'
            className='w-[30rem] bg-accent-300 pr-3 pl-10 py-2 rounded text-white placeholder:text-shadowText-300 border-0 focus:border-brand-500 focus:outline-none focus:ring focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826]'
            placeholder='Search for title, author, type...'
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <button
          type='submit'
          onClick={() => {}}
          className='bg-brand-500 rounded px-3 py-2 font-semibold hover:bg-brand-800 transition-colors focus:outline-none focus:ring focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826]'
        >
          Search
        </button>
      </form>
    </div>
  );
}
