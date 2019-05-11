class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Tea", active: false },
      { id: 2, name: "Potato", active: false },
      { id: 3, name: "Groats", active: false },
      { id: 4, name: "Soup", active: false },
      { id: 5, name: "Juice", active: false },
      { id: 6, name: "Bread", active: false }
    ]
  };

  handleChangeStatus = id => {
    const newItems = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: newItems
    });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <Header items={items} />
        <ListItems items={items} changeStatus={this.handleChangeStatus} />
      </>
    );
  }
}
