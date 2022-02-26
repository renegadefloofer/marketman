const Asset = (props) => {
  return (
    <li>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.amount}</div>
    </li>
  );
};

export default Asset;
