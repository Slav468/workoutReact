import { GoArrowLeft } from 'react-icons/go';
import { IoMdArrowBack } from 'react-icons/io';
import { RiUserLine } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router';
import { useAuth } from '../../../hooks/useAuth';
import Hamburger from '../../elements/hamburger/Hamburger';
import Logo from '../../elements/logo/Logo';
import './header.scss';

const Header = ({ backLink }) => {
  // TODO React router useHistory
  // const { isAuth } = useAuth();

  const { pathname } = useLocation();

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>

          {pathname !== '/' ? (
            <NavLink
              to={'/'}
              className='header__button'
              onClick={() => {}}
            >
              <GoArrowLeft />
            </NavLink>
          ) : (
            <NavLink
              to={'/profile'}
              className='header__button'
            >
              <RiUserLine />
            </NavLink>
          )}

          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
