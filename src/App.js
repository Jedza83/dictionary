import { useEffect, useState } from 'react';
import './App.css';
import { DataProvider, useDictionaryData } from './context/DataContext';
import DictionaryPage from './pages/DictionaryPage';

function App() {
  const [dictionaryData, setDictionaryData] = useState(null);

  useEffect(() => {}, [dictionaryData, setDictionaryData]);

  return (
    <DataProvider
      value={{
        useDictionaryData,
        data: dictionaryData,
        updateData: (value) => {
          setDictionaryData(value);
        },
      }}
    >
      <DictionaryPage />
    </DataProvider>
  );
}

export default App;
