const PositivMessage = () => <p>You can watch the movie. Welcome</p>;
const NegativeMessage = () => (
  <p>You can not watch this movie if you are under 16 years old</p>
);

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
        return <PositivMessage />;
      } else {
        return <NegativeMessage />;
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
    return (
      <>
        <h1>Buy a movie ticket!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">I am at least 16 years old</label>
          <br />
          <button>Buy ticket</button>
        </form>
        {this.disablayMessage()}
        {/* {this.state.isConfirmed ? <PositivMessage /> : <NegativeMessage />} */}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
