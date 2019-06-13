import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../utils/cookies';
import { newEmployeeAction } from '../../actions/admin';

class New extends Component {
  state = {
    employee: {
      name: undefined,
      email: undefined,
      username: undefined,
      password: undefined,
      role: undefined,
      position: undefined
    },
    access: {
      id: getCookie('id'),
      role: getCookie('role')
    },
    success: undefined,
    message: undefined
  }

  onSaveNewEmployee = event => {
    event.preventDefault();

    this.setState({
      employee: {
        name: event.target.name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        role: event.target.role.value,
        position: event.target.position.value
      }
    }, () => {
      this.props.dispatch(newEmployeeAction({
        employee: this.state.employee,
        access: this.state.access
      }));
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.newReducer.hasOwnProperty('response')) {
      return {
        success: nextProps.newReducer.response.success,
        message: nextProps.newReducer.response.message
      }
    }

    return {
      success: undefined,
      message: undefined
    }
  }

  render() {
    return (
      <div className="container">
        <div className={(this.state.success) ? 'success' : 'error'}>{this.state.message}</div>
        <form onSubmit={this.onSaveNewEmployee.bind(this)}>
          <div>
            <label>Name</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label>Position</label>
            <input type='text' name='position' />
          </div>
          <div>
            <label>Username</label>
            <input type='text' name='username' />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' />
          </div>
          <div>
            <label>Role</label>
            <select name='role'>
              <option>Select One</option>
              <option value='Employee'>Employee</option>
              <option value='Manager'>Manager</option>
              <option value='Admin'>Admin</option>
            </select>
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(New);