const ValidationMessage = props => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const OrderForm = props => {
  const { submit, change, isConfirmed } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age">I am at least 16 years old!!</label>
      <br />
      <button>Buy ticket</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false
  };

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      isConfirmed: !prevState.isConfirmed,
      isFormSubmited: false
    }));
  };

  disablayMessage = () => {
    if (this.state.isFormSubmited) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="You can watch the movie. Welcome" />;
      } else {
        return (
          <ValidationMessage txt="You can not watch this movie if you are under 16 years old" />
        );
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmited) {
      this.setState({
        isFormSubmited: true
      });
    }
  };

  render() {
    const { isConfirmed } = this.state;
    return (
      <>
        <h1>Buy a movie ticket!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          isConfirmed={isConfirmed}
        />

        {this.disablayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
