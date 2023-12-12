import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useFetchDictionary from '../hooks/useFetchDictionary';
import { useDictionaryData } from '../context/DataContext';

const Search = () => {
  const dictionary = useDictionaryData();
  const [word, setWord] = useState('hello');
  const [data] = useFetchDictionary(word, [word]);

  useEffect(() => {
    dictionary.updateData(data);
  }, [data, word]);

  return (
    <div className='relative bg-slate-100 rounded-2xl'>
      <input
        placeholder='Type word here...'
        className='bg-transparent rounded-2xl	
       p-3 text-sm w-full'
        type='text'
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <AiOutlineSearch className='absolute right-3 text-violet-500 top-4' />
    </div>
  );
};

export default Search;
