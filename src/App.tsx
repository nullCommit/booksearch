import { Content } from './components/Content';
import { Header } from './components/Header';
import { SearchProvider } from './hooks/useSearch';

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
