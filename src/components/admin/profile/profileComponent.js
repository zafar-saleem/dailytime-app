import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminProfileAction } from '../../../actions/admin';
import ProfileView from './profileView';

class Profile extends Component {
  state = {
    profile: undefined,
    success: undefined,
    message: undefined
  }

  componentDidMount() {
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
    console.log('this.props')
    if (this.state.profile === undefined || this.state.profile.length === 0) {
      return <div>No Profile Found</div>
    }
    return (
      <ProfileView profile={this.state.profile} />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Profile);