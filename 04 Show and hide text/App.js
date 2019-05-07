class Message extends React.Component {
  state = {
    messageIsActive: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      messageIsActive: !prevState.messageIsActive
    }));
  };

  render() {
    const text =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut sed dolorum culpa incidunt odio sequi ex ipsum quaerat, minima, aspernatur amet officia aliquam expedita nam, deleniti pariatur beatae cum.";
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.messageIsActive ? "Hide" : "Show"}
        </button>
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
        {this.state.messageIsActive && <p>{text}</p>}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
