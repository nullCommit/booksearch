import { createContext, useState } from 'react';

interface Results {}

export const SearchContext = createContext([]);

export function SearchProvider() {
  const [SearchResults, setSearchResult] = useState();
}
