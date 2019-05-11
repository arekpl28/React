const Header = props => {
  const activeItems = props.items.filter(item => item.active === true);
  const number = activeItems.length;
  return (
    <header>
      <h2>Size of order: {number}</h2>
      <h2>To pay: {number ? `${number * 10} $` : "No order"}</h2>
    </header>
  );
};
