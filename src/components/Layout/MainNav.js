import classes from './MainNav.module.css';
import NavItem from '../UI/NavItem';

const MainNav = (props) => {
  return (
    <div className={classes.mainnav}>
      {props.navItems.map((item) => {
        return <NavItem title={item.title} />;
      })}
    </div>
  );
};

export default MainNav;
