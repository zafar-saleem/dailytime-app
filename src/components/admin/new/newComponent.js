import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/cookies';
import { newEmployeeAction } from '../../../actions/admin';
import NewView from './newView';

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
    message: undefined,
    isShow: false
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
      if (!this.validateEmployeeData()) {
        this.setState({
          success: false,
          message: 'All fields are mandatory'
        }, () => {
        });

        return;
      }

      this.props.dispatch(newEmployeeAction({
        employee: this.state.employee,
        access: this.state.access
      }));
    });

    event.target.name.value = '';
    event.target.email.value = '';
    event.target.username.value = '';
    event.target.password.value = '';
    event.target.role.value = '';
    event.target.position.value = '';
  }

  validateEmployeeData() {
    if (
      !this.state.employee.name || 
      !this.state.employee.email || 
      !this.state.employee.username || 
      !this.state.employee.password || 
      !this.state.employee.role || 
      !this.state.employee.position) {
      return false;
    }

    return true;
  }

  onFocus() {
    this.setState({ isShow: true });
  }

  onBlur() {
    this.setState({ isShow: false });
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
      <NewView
        success={this.state.success}
        message={this.state.message}
        isShow={this.state.isShow}
        onSaveNewEmployee={this.onSaveNewEmployee.bind(this)}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(New);