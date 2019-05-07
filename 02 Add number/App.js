class App extends React.Component {
  state = {
    text: ""
  };

  handleClick = () => {
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + " " + number
    });
  };

  // bind

  // handleClick() {
  //   const letter = "A";
  //   this.setState({
  //     text: this.state.text + letter
  //   });
  // }

  // prevState

  // handleClick = () => {
  //   const letter = "A";
  //   this.setState(prevState => ({
  //     text: prevState.text + letter
  //   }));
  // };

  render() {
    const btnTitle = "ADD NUMBER";
    return (
      <>
        <button onClick={this.handleClick}>{btnTitle}</button>
        {/* <button onClick={this.handleClick.bind(this)}>Add "A"</button> */}
        <PanelResult text={this.state.text} />
      </>
    );
  }
}

const PanelResult = props => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
