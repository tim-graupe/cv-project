import React, { Component } from "react";
import "../style.css";
import uniqid from "uniqid";

class Personal extends Component {
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
    const { firstName, lastName, address, city, state, zip, email, phone } =
      this.props;
    return (
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <p>
          {address} {city} {state} {zip}
        </p>
        <p>
          {email} {phone}
        </p>
      </div>
    );
  }
}

export default Personal;
