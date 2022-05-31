import { FormEvent, useContext, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import bookImage from '../assets/book.svg';
import { SearchContext } from '../SearchContext';

interface SearchResults {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publishedDate: string;
    pageCount: number;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export function Header() {
  const [search, setSearch] = useState('');

  const { performSearch } = useContext(SearchContext);

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    performSearch(search);
  }

  return (
    <div className='max-w-7xl w-full h-28 mx-auto px-4 flex items-center justify-around gap-16'>
      <a
        href='/'
        className='focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826]'
      >
        <div className='flex items-center gap-3'>
          <img src={bookImage} alt='book' width={65} height={65} />
          <span className='text-2xl text-brand-500 font-semibold'>
            booksearch
          </span>
        </div>
      </a>

      <form onSubmit={handleSearch} className='flex gap-16'>
        <div className='relative flex items-center text-shadowText-300 focus-within:text-brand-500'>
          <MagnifyingGlass className='absolute ml-3' />
          <input
            type='text'
            className='w-[30rem] bg-accent-300 pr-3 pl-10 py-2 rounded text-white placeholder:text-shadowText-300 border-0 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826]'
            placeholder='Search for title, author, subject...'
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <button
          type='submit'
          className='bg-brand-500 rounded px-3 py-2 font-semibold hover:bg-brand-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826]'
        >
          Search
        </button>
      </form>
    </div>
  );
}
