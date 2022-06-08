import React, { Component } from "react";
import '../style.css'


class Education extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          university: "",
          city: "",
          state: "",
          major: "",
          startDate: 0,
          gradDate: 0,

        };
        this.handleChange = this.handleChange.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);
      }

      handleChange(e) {
        const value = e.target.value;
        this.setState({
          [e.target.id] : e.target.value
    
        });
      }
    
      onClickBtn(e) {
        e.preventDefault();
      }

      render(){
          return(
              <div>
                <h1 className="personal">Education</h1>
                  <form>
                  <label htmlFor="univeristy">University</label>
              <input
                type="text"
                id="university"
                required
                onChange={this.handleChange}
                value={this.state.university}
              />

<label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                required
                onChange={this.handleChange}
                value={this.state.city}
              />

<label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                required
                onChange={this.handleChange}
                value={this.state.state}
              />

<label htmlFor="major">Major</label>
              <input
                type="text"
                id="major"
                required
                onChange={this.handleChange}
                value={this.state.major}
              />

<label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                required
                onChange={this.handleChange}
                value={this.state.startDate}
              />
          <label htmlFor="gradDate">Graduation Date</label>
              <input
                type="date"
                id="gradDate"
                required
                onChange={this.handleChange}
                value={this.state.gradDate}
              />

    
                  </form>
              </div>
          )
      }

    }

    export default Education