class App extends React.Component {
  state = {
    result: 1,
    ratio: 2
  };

  handleMultiplication = () => {
    this.setState(prevState => ({
      result: prevState.result * prevState.ratio
    }));
  };

  componentDidUpdate() {
    if (this.state.result > 1000 && this.state.ratio === 2) {
      this.setState({
        ratio: 0.5
      });
    } else if (this.state.result < 1 && this.state.ratio === 0.5) {
      this.setState({
        ratio: 2
      });
    }
  }

  render() {
    const { result, ratio } = this.state;
    return (
      <>
        <p>
          The calculator multiplies by two if the sum is less than 1000. After
          exceeding 1000, the calculator multiplies by 0.5 until it reaches a
          sum less than 1. Then it starts multiplying again by 1
        </p>
        <button onClick={this.handleMultiplication}>
          Multiply by: {ratio}
        </button>
        <h1>Result: {result}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
