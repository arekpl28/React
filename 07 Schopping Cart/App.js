class App extends React.Component {
  state = {
    availableProducts: 9,
    shoppingCart: 1
  };

  handleRemoveFromCart = () => {
    this.setState(prevState => ({
      shoppingCart: prevState.shoppingCart - 1
    }));
  };

  handleAddToCart = () => {
    this.setState(prevState => ({
      shoppingCart: prevState.shoppingCart + 1
    }));
  };

  handleBuy = () => {
    this.setState(props => ({
      availableProducts: props.availableProducts - props.shoppingCart,
      shoppingCart: 0
    }));
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
    return (
      <>
        <h1>Available products: {availableProducts}</h1>
        <button
          onClick={this.handleRemoveFromCart}
          disabled={shoppingCart ? false : true}
        >
          -
        </button>
        <span style={style}>
          {availableProducts === 0 ? "0" : shoppingCart}
        </span>
        <button
          onClick={this.handleAddToCart}
          disabled={availableProducts === shoppingCart ? true : false}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Buy</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
