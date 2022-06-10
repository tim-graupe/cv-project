import React, { Component } from "react";
import "../style.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      university: "",
      uniCity: "",
      uniState: "",
      major: "",
      startDate: 0,
      gradDate: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  onClickBtn(e) {
    e.preventDefault();
  }

  render() {
    const { university, uniCity, uniState, major, startDate, gradDate } =
      this.props;
    return (
      <div>
        <p>{university}</p>
        <p>
          {uniCity} {uniState}
        </p>
        <p>{major}</p>
        <p>
          {startDate} {gradDate}{" "}
        </p>
      </div>
    );
  }
}

export default Education;
