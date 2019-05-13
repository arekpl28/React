const SwitchButton = props => {
  return (
    <button onClick={props.handleOffOn}>
      {props.active ? "Turn off" : "Turn on"}
    </button>
  );
};

class Clock extends React.Component {
  state = {
    time: this.getTime()
  };

  interval = "";

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    };
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({
      time: time
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {hours < 9 ? `0${hours}` : hours} :{" "}
        {minutes < 9 ? `0${minutes}` : minutes} :{" "}
        {seconds < 9 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    active: true
  };
  handleOffOn = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    return (
      <>
        <SwitchButton
          active={this.state.active}
          handleOffOn={this.handleOffOn}
        />
        {this.state.active && <Clock />}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
