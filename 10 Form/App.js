class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLike: false,
    number: "0"
  };

  // handleCityChange = e => {
  //   this.setState({
  //     city: e.target.value
  //   });
  //   console.log(this.state.city);
  // };

  // handleTextChange = e => {
  //   this.setState({
  //     text: e.target.value
  //   });
  //   console.log(this.state.text);
  // };

  // handleIsLikeChange = e => {
  //   this.setState({
  //     isLike: e.target.checked
  //   });
  //   console.log(this.state.isLike);
  // };

  // handleVisitsNumberChange = e => {
  //   this.setState({
  //     number: e.target.value
  //   });
  // };

  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    const { city, text, isLike, number } = this.state;
    return (
      <>
        <label className="input">
          Enter city:
          <input
            name="city"
            value={city}
            // onChange={this.handleCityChange}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        {city}
        <br />
        <label className="textarea">
          Write something about this city:
          <textarea
            name="text"
            value={text}
            // onChange={this.handleTextChange}
            onChange={this.handleChange}
          />
        </label>
        {text}
        <br />
        <label className="checkbox">
          Do you like this city?
          <input
            name="isLike"
            type="checkbox"
            checked={isLike}
            // onChange={this.handleIsLikeChange}
            onChange={this.handleChange}
          />
        </label>
        {isLike ? "true" : "false"}
        <br />
        <label className="select">
          How many times have you been in this city?
          <select
            name="number"
            value={number}
            // onChange={this.handleVisitsNumberChange}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">More</option>
          </select>
        </label>
        {number}
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
