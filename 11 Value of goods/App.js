const Cash = props => {
  const value =
    props.cash <= 0
      ? ""
      : (props.cash * props.ratio * props.price).toFixed(2) +
        props.abbreviation;
  return (
    <div>
      {props.title} {value}
    </div>
  );
};

class ValueGoods extends React.Component {
  state = {
    amount: "",
    product: "electricity"
  };
  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "pound",
        ratio: 0.76919,
        title: "Value in pound: ",
        abbreviation: "£"
      },
      {
        id: 1,
        name: "euro",
        ratio: 0.89016,
        title: "Value in euro: ",
        abbreviation: "£"
      },
      {
        id: 2,
        name: "yuan",
        ratio: 6.82375,
        title: "Value in yuan: ",
        abbreviation: "¥"
      },
      {
        id: 3,
        name: "dollar",
        ratio: 1,
        title: "Value in dollar: ",
        abbreviation: "$"
      }
    ],

    prices: {
      electricity: 0.13,
      gas: 0.78,
      oranges: 0.52
    }
  };

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };

  insertSuffix = select => {
    if (select === "electricity") return <em> kWh</em>;
    else if (select === "gas") return <em> liters</em>;
    else if (select === "oranges") return <em> kg</em>;
    else return null;
  };

  selectPrice = select => {
    const price = this.props.prices[select];
    return price;
  };

  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);
    const calculators = this.props.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        abbreviation={currency.abbreviation}
        cash={amount}
        price={price}
      />
    ));

    return (
      <>
        <label>
          Choose a product:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">Electricity</option>
            <option value="gas">Gas</option>
            <option value="oranges">Oranges</option>
          </select>
        </label>
        <br />
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </>
    );
  }
}

ReactDOM.render(<ValueGoods />, document.getElementById("root"));
