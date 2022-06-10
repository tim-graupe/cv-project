import React, { Component } from "react";
import "../style.css";
import uniqid from "uniqid";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employer: "",
      jobTitle: "",
      jobStart: 0,
      jobEnd: 0,
      responsibilities: "",
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
    const { employer, jobTitle, jobStart, jobEnd, responsibilities } =
      this.props;
    return (
      <div>
        <h1 className="personal">Work Experience</h1>
        <p> {employer} </p>
        <p> {jobTitle} </p>
        <p>
          {jobStart} {jobEnd}
        </p>
        <p>{responsibilities} </p>
      </div>
    );
  }
}

export default Work;
