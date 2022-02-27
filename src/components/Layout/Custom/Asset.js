import Card from '../Card';

const Asset = (props) => {
  return (
    <li>
      <Card></Card>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.amount}</div>
    </li>
  );
};

export default Asset;
