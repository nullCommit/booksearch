import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

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

export const SearchContext = createContext<SearchResults[]>([]);

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);

  useEffect(() => {
    api
      .get('vampire&key=AIzaSyBjTZrhDBqJmT8_OQPItxpyYoVUposxk_s')
      .then(response => setSearchResults(response.data.items));
  }, []);

  const formatter = new Intl.DateTimeFormat('pt-Br', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  function performSearch(search: string) {
    api
      .get(`${search}&key=AIzaSyBjTZrhDBqJmT8_OQPItxpyYoVUposxk_s`)
      .then(response => {
        const formattedData = response.data.items.map(item => {
          return {
            id: item.id,
            volumeInfo: {
              title: item.volumeInfo.title,
              subtitle: item.volumeInfo.subtitle,
              authors: item.volumeInfo.authors,
              publishedDate: formatter.format(item.volumeInfo.publishedDate),
              pageCount: item.volumeInfo.pageCount,
              imageLinks: item.volumeInfo.imageLinks,
            },
          };
        });

        setSearchResults(formattedData);
      });
  }

  return (
    <SearchContext.Provider value={searchResults}>
      {children}
    </SearchContext.Provider>
  );
}
