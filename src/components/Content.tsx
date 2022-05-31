import { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { ContentCard } from './ContentCard';

export function Content() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div className='flex flex-col'>
      {searchResults &&
        searchResults.map(result => (
          <ContentCard content={result.volumeInfo} />
        ))}

      <a href='' className='my-7 text-brand-500 font-semibold '>
        Carregar mais resultados
      </a>
    </div>
  );
}
