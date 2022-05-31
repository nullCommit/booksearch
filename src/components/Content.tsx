import { useSearch } from '../hooks/useSearch';
import { ContentCard } from './ContentCard';

export function Content() {
  const { searchResults, loadNextResults } = useSearch();

  return (
    <div className='flex flex-col'>
      {searchResults &&
        searchResults.map(result => (
          <ContentCard key={result.id} content={result.volumeInfo} />
        ))}

      {searchResults && (
        <button
          onClick={loadNextResults}
          className='my-7 text-brand-500 font-semibold '
        >
          Carregar mais resultados
        </button>
      )}
    </div>
  );
}
