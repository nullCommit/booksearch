import { useSearch } from '../hooks/useSearch';
import { ContentCard } from './ContentCard';

import openedBookImage from '../assets/opened-book.svg';

export function Content() {
  const { searchResults, loadNextResults } = useSearch();

  return (
    <div className='flex flex-col'>
      {searchResults &&
        searchResults.map(result => (
          <ContentCard key={result.id} content={result.volumeInfo} />
        ))}

      {searchResults.length > 0 ? (
        <button
          onClick={loadNextResults}
          className='my-7 text-brand-500 font-semibold '
        >
          Carregar mais resultados
        </button>
      ) : (
        <div className='flex flex-col items-center mt-48'>
          <img src={openedBookImage} className='opacity-20'></img>
          <span>Search for one book</span>
        </div>
      )}
    </div>
  );
}
