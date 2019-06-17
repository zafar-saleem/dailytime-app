import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeDetailsAction } from '../../actions/admin';

class Details extends Component {
  state = {
    details: undefined
  }

  componentDidMount() {
    this.props.dispatch(employeeDetailsAction({
      id: this.props.match.params.id
    }));
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.detailsReducer.hasOwnProperty('response')) {
      return {
        details: nextProps.detailsReducer.response
      }
    }

    return {
      details: undefined
    }
  }

  render() {
    if (this.state.details === undefined) {
      return <div>No Employee</div>
    }

    const {
      name,
      email,
      username,
      role,
      position
    } = this.state.details;

    return (
      <div className="dialog">
        <table>
          <tbody>
            <tr>
              <th>Name</th><td>{name}</td>
            </tr>
            <tr>
              <th>Email</th><td>{email}</td>
            </tr>
            <tr>
              <th>Username</th><td>{username}</td>
            </tr>
            <tr>
              <th>Role</th><td>{role}</td>
            </tr>
            <tr>
              <th>Position</th><td>{position}</td>
            </tr>
          </tbody>
        </table>
        <div className="backdrop"></div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Details);

