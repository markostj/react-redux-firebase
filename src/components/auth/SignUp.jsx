import React, { Component } from "react";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="signIn">
        <form onSubmit={this.handleSubmit} className="signIn__form">
          <h3 className="signIn__form__title">Sign Up</h3>
          <div className="input__field">
            <label htmlFor="email" className="signIn__form__label">
              Email
            </label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input__field">
            <label htmlFor="password" className="signIn__form__label">
              Password
            </label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input__field">
            <label htmlFor="firstName" className="signIn__form__label">
              First Name
            </label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input__field">
            <label htmlFor="lastName" className="signIn__form__label">
              Last Name
            </label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input__field">
            <button className="signIn__form__btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
