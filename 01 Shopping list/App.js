class ShoppingList extends React.Component {
  state = {
    items1: "cucumbers",
    items2: "juice",
    items3: "tomatoes"
  };

  render() {
    return (
      <>
        <h1>Shopping lis:</h1>
        <ul>
          <ItemList name={this.state.items1} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    );
  }
}

// const ItemList = props => {
//   return <li>{props.name}</li>;
// };

class ItemList extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
