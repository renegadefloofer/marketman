import classes from './NavItem.module.css';

const NavItem = (props) => {
  return <div className={classes.item}>{props.title}</div>;
};

export default NavItem;
