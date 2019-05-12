const Person = props => {
  return (
    <li>
      <button onClick={() => props.remove(props.id)}>Delete</button>{" "}
      {props.name}
    </li>
  );
};

const List = props => {
  const list = props.users.map((user, index) => (
    <Person name={user.name} key={user.id} id={index} remove={props.remove} />
  ));
  return list;
};

class App extends React.Component {
  stats = {
    users: [
      { id: 0, name: "Jan K." },
      { id: 1, name: "Piotr C." },
      { id: 2, name: "Marysia W." },
      { id: 3, name: "John S." }
    ]
  };

  handleDelete = id => {
    console.log(id);
    const users = this.stats.users.splice(id, 1);
    this.setState({
      users: users
    });
  };

  render() {
    return (
      <>
        <List users={this.stats.users} remove={this.handleDelete} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
