const PositivMessage = () => <p>You can watch the movie. Welcome</p>;
const NegativeMessage = () => (
  <p>You can not watch this movie if you are under 16 years old</p>
);

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false
  };

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      isConfirmed: !prevState.isConfirmed
    }));
  };

  disablayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositivMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    return (
      <>
        <h1>Buy a movie ticket!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">I am at least 16 years old</label>
        {this.disablayMessage()}
        {/* {this.state.isConfirmed ? <PositivMessage /> : <NegativeMessage />} */}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
