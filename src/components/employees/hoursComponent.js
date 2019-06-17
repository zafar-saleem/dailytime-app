import React, { Component } from 'react';
import { fileHoursAction } from '../../actions/employees';
import { connect } from 'react-redux';
import { getCookie } from '../../utils/cookies';

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
    message: undefined
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

  render() {
    return (
      <div>
        <div className={(this.state.success) ? 'success' : 'error'}>{this.state.message}</div>
        <h3>Enter Your Work Hours Below:</h3>
        <form onSubmit={this.onFileHours.bind(this)}>
          <div>
            <label>Date</label>
            <input type="date" name="date" />
          </div>
          <div>
            <label>Start Time</label>
            <input type="time" name="startTime" />
          </div>
          <div>
            <label>Finish Time</label>
            <input type="time" name="finishTime" />
          </div>
          <div>
            <label>List of Tasks</label>
            <textarea cols="40" rows="10" name="tasks"></textarea>
          </div>
          <div>
            <button>File My Hours</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Hours);
