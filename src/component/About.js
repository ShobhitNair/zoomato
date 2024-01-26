import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      documentation_url: "",
      count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("");
    const json = await data.json();
    console.log(json);
    this.setState({
      message: json.message,
      documentation_url: json.documentation_url,
    });
  }
  componentDidUpdate() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { message, documentation_url } = this.state;

    return (
      <div>
        About
        <li>{this.state.count}</li>
        <button
          onClick={() => {
            this.setState();
          }}
        >
          Count
        </button>
        <li>{message}</li>
        <li>{documentation_url}</li>
      </div>
    );
  }
}

export default About;
