import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers.js";
import { render } from "@testing-library/react";
import React, { Component } from "react";
import { ReactDOM } from "react";
import Education from "./Components/Education.js";
import Personal from "./Components/Personal.js";
import Work from "./Components/Work.js";
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
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
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      email,
      phone,
      university,
      uniCity,
      uniState,
      major,
      startDate,
      gradDate,
      employer,
      jobTitle,
      jobStart,
      jobEnd,
      responsibilities,
    } = this.state;

    return (
      <div className="full">
        <div className="inputHalf">
          <form onSubmit={this.onClickBtn}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              onChange={this.handleChange}
              value={firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              onChange={this.handleChange}
              value={lastName}
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              required
              onChange={this.handleChange}
              value={address}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              required
              onChange={this.handleChange}
              value={city}
            />

            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              required
              onChange={this.handleChange}
              value={state}
            />

            <label htmlFor="zip">ZIP</label>
            <input
              type="text"
              id="zip"
              pattern="[0-9]{5}"
              required
              onChange={this.handleChange}
              value={zip}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required
              onChange={this.handleChange}
              value={email}
            />

            <label htmlFor="phone">Phone number</label>

            <input
              type="text"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
              onChange={this.handleChange}
              value={phone}
            />
          </form>

          <form>
            <label htmlFor="univeristy">University</label>
            <input
              type="text"
              id="university"
              required
              onChange={this.handleChange}
              value={university}
            />

            <label htmlFor="uniCity">City</label>
            <input
              type="text"
              id="uniCity"
              required
              onChange={this.handleChange}
              value={uniCity}
            />

            <label htmlFor="uniState">State</label>
            <input
              type="text"
              id="uniState"
              required
              onChange={this.handleChange}
              value={uniState}
            />

            <label htmlFor="major">Major</label>
            <input
              type="text"
              id="major"
              required
              onChange={this.handleChange}
              value={major}
            />

            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              required
              onChange={this.handleChange}
              value={startDate}
            />
            <label htmlFor="gradDate">Graduation Date</label>
            <input
              type="date"
              id="gradDate"
              required
              onChange={this.handleChange}
              value={gradDate}
            />
          </form>

          <form onSubmit={this.onClickBtn}>
            <label htmlFor="employer">Employer</label>
            <input
              type="text"
              id="employer"
              required
              onChange={this.handleChange}
              value={employer}
            />

            <label htmlFor="title">Title</label>
            <input
              className="description"
              type="text"
              id="jobTitle"
              required
              onChange={this.handleChange}
              value={jobTitle}
            />

            <label htmlFor="description">
              Description and Responsibilities
            </label>
            <input
              type="text"
              id="responsibilities"
              required
              onChange={this.handleChange}
              value={responsibilities}
            />

            <label htmlFor="jobStart">Start Date</label>
            <input
              type="date"
              id="jobStart"
              required
              onChange={this.handleChange}
              value={jobStart}
            />
            <label htmlFor="jobEnd">End Date</label>
            <input
              type="date"
              id="jobEnd"
              required
              onChange={this.handleChange}
              value={jobEnd}
            />
          </form>
        </div>
        <div className="previewHalf">
          <h1 className="personal">Personal Information</h1>

          <Personal
            firstName={firstName}
            lastName={lastName}
            address={address}
            city={city}
            state={state}
            zip={zip}
            email={email}
            phone={phone}
          />
          <h1 className="personal">Education</h1>
          <Education
            university={university}
            uniCity={uniCity}
            uniState={uniState}
            major={major}
            startDate={startDate}
            gradDate={gradDate}
          />
          <Work
            employer={employer}
            jobTitle={jobTitle}
            jobStart={jobStart}
            jobEnd={jobEnd}
            responsibilities={responsibilities}
          />
        </div>
      </div>
    );
  }
}

export default App;
