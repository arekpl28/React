const Item = props => {
  return (
    <li
      onClick={() => props.changeStatus(props.id)}
      className={props.activeItem ? "enabled" : "disabled"}
      // style={props.activeItem ? { fontWeight: "bold" } : { color: "gray" }}
    >
      {props.name}
    </li>
  );
};
