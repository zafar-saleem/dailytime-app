import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authentication';
import { setCookie, getCookie } from '../utils/cookies';

import './authentication.css';

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
        setCookie('role', this.props.response.login.response.role, 1);
        setCookie('name', this.props.response.login.response.name, 1);
        setCookie('id', this.props.response.login.response.id, 1);
      }
    }

    return (
      <div className="auth-container">
        <h3 className="page-title">Login</h3>
        {
          (isSuccess && getCookie('role') === 'Admin')
          ?
          <Redirect to='admin/list' />
          :
          ((isSuccess && getCookie('role') === 'Employee')
            ? <Redirect to='/employee/home' />
            :
            ((isSuccess && getCookie('role') === 'Manager')
            ?
            <Redirect to='/manager' />
            :
            <div className="error">{message}</div>
            ))
        }
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label className="labels" htmlFor="username">Username</label>
            <input type="text" name="username" className="fields" id="username" />
          </div>
          <div>
            <label className="labels" htmlFor="password">Password</label>
            <input type="password" name="password" className="fields" id="password" />
          </div>
          <div>
            <button className="btn btn-login">Login</button>
          </div>
        </form>
        <span className="common forgot">
          Don't have account? <Link to='register'>Register here</Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);