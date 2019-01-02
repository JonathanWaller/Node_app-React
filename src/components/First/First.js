import React, { Component } from "react";

class First extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>Passed down my friend {this.props.buddy} from parent</div>
      </div>
    );
  }
}

export default First;
