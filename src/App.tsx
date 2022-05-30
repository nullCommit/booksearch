import { Content } from './components/Content';
import { Header } from './components/Header';
import { SearchContext } from './SearchContext';

export function App() {
  return (
    <SearchContext.Provider value={[]}>
      <div className='flex flex-col items-center relative'>
        <Header />
        <Content />
      </div>
    </SearchContext.Provider>
  );
}
