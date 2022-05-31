import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';
import { authorsFormatter, dateFormatter } from './util/helpers';

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

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  searchResults: SearchResults[];
  performSearch: (search: string) => void;
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData
);

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);

  // useEffect(() => {
  //   api
  //     .get('vampire&key=AIzaSyBjTZrhDBqJmT8_OQPItxpyYoVUposxk_s')
  //     .then(response => setSearchResults(response.data.items));
  // }, []);

  async function performSearch(search: string) {
    const response = await api.get(
      `${search}&key=AIzaSyBjTZrhDBqJmT8_OQPItxpyYoVUposxk_s`
    );

    const formattedData = await response.data.items.map(result => {
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
        },
      };
    });

    setSearchResults(formattedData);
  }

  return (
    <SearchContext.Provider value={{ searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
