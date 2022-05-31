import { Content } from './components/Content';
import { Header } from './components/Header';
import { SearchContext, SearchProvider } from './SearchContext';

export function App() {
  return (
    <SearchProvider>
      <div className='flex flex-col items-center relative'>
        <Header />
        <Content />
      </div>
    </SearchProvider>
  );
}
