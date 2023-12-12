import { useState, useEffect } from 'react';

const useFetchDictionary = (word = '', dependencies = []) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('FROM SERVER', data);
        setData(data[0]);
      });
  }, [word, ...dependencies]);

  return [data];
};

export default useFetchDictionary;
