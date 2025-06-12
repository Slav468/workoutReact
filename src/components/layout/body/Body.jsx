// import styles from '../header/header.scss';

const Body = ({ heading }) => {
  console.log(heading);
  return <div>{<h1 className={heading}>{heading}</h1>}</div>;
};

export default Body;
