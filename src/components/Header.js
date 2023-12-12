import { PiBooksLight } from 'react-icons/pi';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSunnyOutline } from 'react-icons/io5';

const Header = () => {
  const toggleDarkMode = () => {
    console.log('CLICK');
    document.body.classList.toggle('dark');
  };

  return (
    <div className='flex items-center justify-between text-xl mb-4 mt-3'>
      <div className='flex items-center'>
        <PiBooksLight className='text-4xl mr-1' />
        <span className='text-xs text-slate-400'>Dictionary</span>
      </div>
      <div className='flex items-center' onClick={toggleDarkMode}>
        <IoMoonOutline className='mr-2' />
        <IoSunnyOutline />
      </div>
    </div>
  );
};

export default Header;
