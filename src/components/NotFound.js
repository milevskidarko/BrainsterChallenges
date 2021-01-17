import React, { Component } from "react";

class NotFound extends Component {
  state = {
    timeout: 4,
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.timeout > 0) {
        this.setState({
          timeout: this.state.timeout - 1,
        });
      } else {
        this.props.history.push("/");
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="py-5 font-weight-bold">
        This page does not exist. You will be redirected in{" "}
        <span className="text-danger">{this.state.timeout}</span>
      </div>
    );
  }
}

export default NotFound;
