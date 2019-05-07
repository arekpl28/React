class App extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          type="text"
          placeholder="write..."
        />
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.text.toUpperCase()}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
