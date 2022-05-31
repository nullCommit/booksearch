import { useSearch } from '../hooks/useSearch';
import { ContentCard } from './ContentCard';

import openedBookImage from '../assets/opened-book.svg';

export function Content() {
  const { searchResults, loadNextResults } = useSearch();

  return (
    <div className='flex flex-col min-h-[calc(100vh-11rem)]'>
      {searchResults &&
        searchResults.map(result => (
          <ContentCard key={result.id} content={result.volumeInfo} />
        ))}

      {searchResults.length > 0 ? (
        <button
          onClick={loadNextResults}
          className='my-7 text-brand-500 font-semibold'
        >
          Load more results
        </button>
      ) : (
        <div className='flex flex-col flex-grow items-center justify-center'>
          <img src={openedBookImage} className='opacity-20'></img>
          <span className='text-shadowText-100 font-semibold'>
            Search for a book
          </span>
        </div>
      )}
    </div>
  );
}
