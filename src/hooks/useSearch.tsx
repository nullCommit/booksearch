import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
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
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);
let nextPage: number;

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [searchInput, setSearchInput] = useState('');

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

  // useEffect(() => {
  //   api
  //     .get(`vampiro&startIndex=0&key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
  //     .then(results => setSearchResults(results.data.items));
  // }, []);

  async function performSearch(search: string) {
    if (!search) return;

    setSearchResults([]);
    setSearchInput(search);
    nextPage = 0;

    try {
      const response = await api.get(
        `${search}&startIndex=0&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
      );

      setSearchResults(dataFormatter(response.data.items));
    } catch (error) {
      console.log(error);
    }
  }

  async function loadNextResults() {
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
    }
  }

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        performSearch,
        loadNextResults,
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
