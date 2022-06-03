import { FormEvent, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import bookImage from '../assets/book.svg';
import { useSearch } from '../hooks/useSearch';

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

  const { performSearch } = useSearch();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    performSearch(search);

    setSearch('');
  }

  return (
    <div className='max-w-7xl w-full h-28 mx-auto px-4 flex items-center justify-around  md:gap-16'>
      <a href='/' className='focus:outline-none'>
        <div className='flex items-center gap-3'>
          <img
            src={bookImage}
            alt='book'
            width={50}
            height={50}
            className='md:w-[65px] md:w-[65px]'
          />
          <span className='hidden text-2xl text-brand-500 font-semibold md:block'>
            booksearch
          </span>
        </div>
      </a>

      <form onSubmit={handleSearch} className='flex gap-16'>
        <div className='relative flex items-center text-shadowText-300 focus-within:text-brand-500'>
          <MagnifyingGlass className='absolute ml-3' />
          <input
            type='text'
            className='w-[15rem] bg-accent-300 pr-3 pl-10 py-2 rounded text-white placeholder:text-shadowText-300 placeholder:text-sm border-0 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826] md:w-[20rem] md:placeholder:text-base lg:w-[30rem]'
            placeholder='Type title, author, subject...'
            onChange={e => setSearch(e.target.value)}
            value={search}
            autoCorrect='off'
            autoComplete='off'
          />
        </div>

        <button
          type='submit'
          className='hidden bg-brand-500 rounded px-3 py-2 font-semibold hover:bg-brand-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-[#111826] md:block '
        >
          Search
        </button>
      </form>
    </div>
  );
}
