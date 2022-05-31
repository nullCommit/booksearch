import { LinkedinLogo, GithubLogo } from 'phosphor-react';

export function Footer() {
  return (
    <div className='max-w-7xl w-full h-16 mx-auto px-12 flex items-center justify-between bg-[#111826] border-t-2 border-t-accent-300'>
      <span className='text-shadowText-100 font-thin'>
        Made by Allan Duarte
      </span>
      <div className='flex gap-2'>
        <a href='https://www.linkedin.com/in/allan-duarte/' target='_blank'>
          <LinkedinLogo size={30} />
        </a>
        <a href='https://github.com/nullCommit' target='_blank'>
          <GithubLogo size={30} />
        </a>
      </div>
    </div>
  );
}
