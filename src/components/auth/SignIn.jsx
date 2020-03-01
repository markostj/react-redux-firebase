import React, { Component } from "react";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
          <h3 className="signIn__form__title">Sign In</h3>
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
            <button className="signIn__form__btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
