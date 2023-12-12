import { IoMdPlay } from 'react-icons/io';
import { useDictionaryData } from '../context/DataContext';
import { useEffect } from 'react';

const Word = () => {
  const dictionary = useDictionaryData();

  return (
    <div className='flex justify-between items-center mt-4'>
      <section>
        <h1 className='text-4xl font-bold font-serif '>{dictionary?.data?.word}</h1>
        <span className='text-violet-500'>{dictionary?.data?.phonetic}</span>
      </section>
      <section
        className='bg-violet-100 w-[50px] h-[50px] 
        rounded-full flex items-center justify-center'
      >
        <IoMdPlay className='text-2xl text-violet-500 ml-1' />
      </section>
    </div>
  );
};

export default Word;
