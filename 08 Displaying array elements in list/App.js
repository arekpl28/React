const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Asia",
      sex: "female"
    },
    {
      id: 4,
      age: 39,
      name: "Karol",
      sex: "male"
    }
  ]
};

const Item = props => {
  const { name, age, sex } = props.user;
  return (
    <div className="userInfo">
      <h1>{name}</h1>
      <p>Information about user:</p>
      <p>
        User's age: <strong>{age}</strong> yers.
      </p>
      <p>
        User's gender: <strong>{sex}.</strong>
      </p>
    </div>
  );
};

class App extends React.Component {
  state = {
    select: "all"
  };

  handleUsersFilter = option => {
    this.setState({
      select: option
    });
  };

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        users = users.map(user => <Item key={user.id} user={user} />);
        return users;
      case "female":
        users = users.filter(user => user.sex === "female");
        users = users.map(user => <Item key={user.id} user={user} />);
        return users;
      case "male":
        users = users.filter(user => user.sex === "male");
        users = users.map(user => <Item key={user.id} user={user} />);
        return users;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>All</button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Female
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Male
        </button>
        {this.usersList()}
      </>
    );
  }
}

ReactDOM.render(<App data={data} />, document.getElementById("root"));
