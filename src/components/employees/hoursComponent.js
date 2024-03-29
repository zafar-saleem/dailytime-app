import React, { Component } from 'react';
import { fileHoursAction } from '../../actions/employees';
import { connect } from 'react-redux';
import { getCookie } from '../../utils/cookies';
import HoursView from './hoursView';

import './hours.css';

class Hours extends Component {
  state = {
    hours: {
      date: undefined,
      startTime: undefined,
      finishTime: undefined,
      tasks: undefined
    },
    access: {
      role: getCookie('role'),
      token: getCookie('token')
    },
    success: undefined,
    message: undefined,
    isShow: false
  }

  onFileHours = event => {
    event.preventDefault();

    this.setState({
      hours: {
        date: event.target.date.value,
        startTime: event.target.startTime.value,
        finishTime: event.target.finishTime.value,
        tasks: event.target.tasks.value,
        userid: getCookie('id')
      }
    }, () => {
      this.props.dispatch(fileHoursAction({
        hours: this.state.hours,
        access: this.state.access
      }))
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.hoursReducer.hasOwnProperty('response')) {
      return {
        success: nextProps.hoursReducer.response.success,
        message: nextProps.hoursReducer.response.message
      }
    }

    return {
      success: undefined,
      message: undefined
    }
  }

  onFocus() {
    this.setState({ isShow: true });
  }

  onBlur() {
    this.setState({ isShow: false });
  }

  render() {
    return (
      <HoursView 
        success={this.state.success}
        message={this.state.message}
        onFileHours={this.onFileHours.bind(this)}
        isShow={this.state.isShow}
        onBlur={this.onBlur.bind(this)}
        onFocus={this.onFocus.bind(this)} />
    )
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Hours);
