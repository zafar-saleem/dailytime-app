import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeDetailsAction } from '../../../actions/admin';
import PropTypes from 'prop-types'

import DetailsView from './detailsView';
import './details.css';

class Details extends Component {
  state = {
    details: undefined
  }

  static contextTypes = {
    router: PropTypes.object
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
    this.context.router.history.push(`/admin/list`);
  }

  render() {
    if (this.state.details === undefined) {
      return <div>No Employee</div>
    }

    return (
      <DetailsView
        employee={this.state.details.user}
        hours={this.state.details.hours}
        props={this.props}
        onHandleClose={this.onHandleClose.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Details);

