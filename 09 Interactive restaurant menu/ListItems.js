const ListItems = props => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      activeItem={item.active}
      changeStatus={props.changeStatus}
    />
  ));
  return (
    <div className="list">
      <h1>Click what you would like to order</h1>
      <ul>{items}</ul>
    </div>
  );
};
