import cn from 'clsx';
import Body from './body/Body';
import Header from './header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children, bgImage, heading = 'sdd', backLink = '/' }) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.otherPage]: !!heading,
      })}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header backLink={backLink} />
      <Body heading={heading} />
    </div>
  );
};

export default Layout;
