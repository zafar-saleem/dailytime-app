import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeDetailsAction } from '../../actions/admin';

import DetailsView from './detailsView';

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

    return (
      <DetailsView employee={this.state.details} />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Details);

