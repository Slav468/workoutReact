import cn from 'clsx';
import { Link } from 'react-router';
import { menu } from './menu.data';
import styles from './menu.module.scss';

const Menu = ({ isShow }) => {
  const logoutHandler = () => {};

  return (
    <nav
      className={cn(styles.menu, {
        [styles.show]: isShow,
      })}
    >
      <ul>
        {menu.map((item, index) => (
          <li key={`_menu_${index}`}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
