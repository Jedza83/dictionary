import Header from '../components/Header';
import Noun from '../components/Noun';
import Search from '../components/Search';
import Verb from '../components/Verb';
import Word from '../components/Word';

const DictionaryPage = () => {
  return (
    <main className='w-screen flex flex-col justify-between items-center bg-white dark:bg-black'>
      <div className='w-[60vw] '>
        <Header />
        <Search />
        <Word />
        <Noun />
        <Verb />
      </div>
    </main>
  );
};

export default DictionaryPage;
