import React, { Component } from "react";
import { ReactDOM } from "react";
import "./style.css";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="personal">Personal Information</h1>

        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" required />

          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" required />

          <label htmlFor="state">State</label>
          <input type="text" id="state" required />

          <label htmlFor="zip">ZIP</label>
          <input type="text" id="zip" pattern="[0-9]{5}" required/>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" required/>

          <label htmlFor="phone">Phone number</label>

          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
