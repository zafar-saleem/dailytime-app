import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminProfileAction } from '../../actions/admin';

class Profile extends Component {
  state = {
    profile: undefined,
    success: undefined,
    message: undefined
  }

  constructor(props) {
    super(props);
    this.props.dispatch(adminProfileAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.profileReducer.hasOwnProperty('response')) {
      return {
        profile: nextProps.profileReducer.response
      }
    }

    return {
      profile: undefined,
      success: undefined,
      message: undefined
    }
  }

  render() {
    if (this.state.profile === undefined || this.state.profile.length === 0) {
      return <div>No Profile Found</div>
    }
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>
                Username
              </th>
              <th>
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.profile.map(item => (
              <tr key={item._id}>
                <td>{item.username}</td>
                <td>{item.role}</td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Profile);