import { Nav, Info } from './components';

const Header: React.FC = () => {
  return (
    <header className='h-screen bg-primary dark:bg-[#1c1d25]'>
      <Nav />
      <Info />
    </header>
  );
};

export default Header;
