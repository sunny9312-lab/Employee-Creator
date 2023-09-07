import s from "./CardList.module.scss";

// eslint-disable-next-line react/prop-types
const CardList = ({ children }) => {
  return <div className={s.wrap}>{children}</div>;
};

export default CardList;
