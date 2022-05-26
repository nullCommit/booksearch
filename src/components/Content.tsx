import { ContentCard } from './ContentCard';

export function Content() {
  return (
    <div className='flex flex-col'>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />

      <a href='' className='mt-7 text-brand-500 font-semibold'>
        Carregar mais resultados
      </a>
    </div>
  );
}
