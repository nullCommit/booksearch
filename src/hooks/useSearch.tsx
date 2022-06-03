import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { authorsFormatter, dateFormatter } from '../util/helpers';

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
    infoLink: string;
  };
}

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  searchResults: SearchResults[];
  performSearch: (search: string) => Promise<void>;
  loadNextResults: () => Promise<void>;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);
let nextPage: number;

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  function dataFormatter(items: SearchResults[]) {
    return items.map(result => {
      return {
        id: result.id,
        volumeInfo: {
          title: result.volumeInfo.title,
          subtitle: result.volumeInfo.subtitle,
          authors: authorsFormatter(result.volumeInfo.authors),
          publishedDate: result.volumeInfo.publishedDate
            ? dateFormatter.format(
                new Date(`${result.volumeInfo.publishedDate} 00:00:00`)
              )
            : 'N/A',
          pageCount: result.volumeInfo.pageCount,
          imageLinks: result.volumeInfo.imageLinks,
          infoLink: result.volumeInfo.infoLink,
        },
      };
    }) as SearchResults[];
  }

  async function performSearch(search: string) {
    if (!search) return;

    setSearchResults([]);
    setSearchInput(search);
    setIsSearching(true);
    nextPage = 0;

    try {
      const response = await api.get(
        `${search}&startIndex=0&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
      );

      setSearchResults(dataFormatter(response.data.items));
    } catch (error) {
      console.log(error);
    } finally {
      // setIsSearching(false);
    }
  }

  async function loadNextResults() {
    setIsSearching(true);
    nextPage += 11;

    try {
      const response = await api.get(
        `${searchInput}&startIndex=${nextPage}&key=${
          import.meta.env.VITE_GOOGLE_API_KEY
        }`
      );

      setSearchResults([
        ...searchResults,
        ...dataFormatter(response.data.items),
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      // setIsSearching(false);
    }
  }

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        performSearch,
        loadNextResults,
        isSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}
