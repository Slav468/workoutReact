import { useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import { RiCloseFill, RiMenu4Line } from 'react-icons/ri';
import styles from '../hamburger/Hamburger.module.scss';
import Menu from '../menu/Menu';

// import { menu } from './menu.data.js';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={styles.hamburger}
      ref={ref}
    >
      <button
        className={styles.hamburger__button}
        onClick={handleOpenModal}
      >
        {isOpen ? <RiCloseFill /> : <RiMenu4Line />}
      </button>

      {isOpen && <Menu isShow={isOpen} />}
    </div>
  );
};

export default Hamburger;
