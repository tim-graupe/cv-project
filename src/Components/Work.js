import React, { Component } from "react";
import "../style.css";
import uniqid from "uniqid";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employer: "",
      jobTitle: "",
      startDate: 0,
      endDate: 0,
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
    return (
      <div>
        <h1 className="personal">Work Experience</h1>

        <form onSubmit={this.onClickBtn}>
          <label htmlFor="employer">Employer</label>
          <input
            type="text"
            id="employer"
            required
            onChange={this.handleChange}
            value={this.state.employer}
          />

          <label htmlFor="title">Title</label>
          <input
            className="description"
            type="text"
            id="title"
            required
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label htmlFor="description">Description and Responsibilities</label>
          <input
            type="text"
            id="description"
            required
            onChange={this.handleChange}
            value={this.state.description}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            required
            onChange={this.handleChange}
            value={this.state.startDate}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            required
            onChange={this.handleChange}
            value={this.state.endDate}
          />
        </form>
      </div>
    );
  }
}

export default Work;
