import classes from './Asset.module.css';

const Asset = (props) => {
  return (
    <li className={classes.asset}>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.amount}</div>
    </li>
  );
};

export default Asset;
