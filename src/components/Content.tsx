import { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { ContentCard } from './ContentCard';

export function Content() {
  const search = useContext(SearchContext);

  return (
    <div className='flex flex-col'>
      {search &&
        search.map(result => <ContentCard content={result.volumeInfo} />)}

      <a href='' className='mt-7 text-brand-500 font-semibold'>
        Carregar mais resultados
      </a>
    </div>
  );
}
