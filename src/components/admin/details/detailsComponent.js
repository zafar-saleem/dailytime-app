import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { employeeDetailsAction } from '../../../actions/admin';

import DetailsView from './detailsView';
import './details.css';

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

  onHandleClose() {
  }

  render() {
    if (this.state.details === undefined) {
      return <div>No Employee</div>
    }

    return (
      <DetailsView
        employee={this.state.details.user}
        hours={this.state.details.hours}
        show={this.state.show}
        onHandleClose={this.onHandleClose.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Details);

