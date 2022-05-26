import { Content } from './components/Content';
import { Header } from './components/Header';

export function App() {
  return (
    <div className='flex flex-col items-center relative'>
      <Header />
      <Content />
    </div>
  );
}
