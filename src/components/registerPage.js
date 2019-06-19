import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/authentication';

class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      name, username, password
    };

    this.props.dispatch(registerUserAction(data));
  }

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }
    
    return (
      <div className="auth-container">
        <h3 className="page-title">Register</h3>
        {!isSuccess ? <div className="error">{message}</div> : <Redirect to='login' />}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label className="labels" htmlFor="name">Name</label>
            <input type="text" name="name" className="fields" id="name" />
          </div>
          <div>
            <label className="labels" htmlFor="username">Username</label>
            <input type="text" name="username" className="fields" id="username" />
          </div>
          <div>
            <label className="labels" htmlFor="password">Password</label>
            <input type="password" name="password" className="fields" id="password" />
          </div>
          <div>
            <button className="btn btn-register">Register</button>
          </div>
        </form>
        <span className="common login">
          Already have account? <Link to='login'>Login here</Link>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);
