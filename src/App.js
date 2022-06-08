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
      [e.target.id] : e.target.value

    });
    console.log(this.firstName)

  }

  onClickBtn(e) {
    e.preventDefault();
  }
  render(){
    const {firstName, lastName, address, city, state, zip, email, phone} = this.state

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
    
              <button type="submit">Submit</button>
    
  
            </form>      
   
</div>
<div className="previewHalf">
<h1 className="personal">Personal Information</h1>

  <Personal 
   firstName = {firstName}
  lastName = {lastName}
address = {address}
city = {city}
state = {state}
zip = {zip}
email = {email}
phone = {phone}

       />
  {/* <Education />
  <Work /> */}
</div>
</div>
  )
  }  
}

export default App;
