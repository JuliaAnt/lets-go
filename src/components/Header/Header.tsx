import './Header.scss';
import logo from '../../assets/logo_full.svg';

export const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      <p>Header</p>
    </header>
  );
};
