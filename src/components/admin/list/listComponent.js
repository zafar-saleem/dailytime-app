import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesListAction } from '../../../actions/admin';
import Details from '../details/detailsComponent';
import ListView from './listView';

class List extends Component {
  state = {
    employees: [],
    success: undefined,
    message: undefined
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(employeesListAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.listReducer.hasOwnProperty('response')) {
      return {
        employees: nextProps.listReducer.response
      }
    }

    return {
      employees: [],
      success: undefined,
      message: undefined
    }
  }

  render() {
    if (this.state.employees === undefined || this.state.employees.length === 0) {
      return <div>No Employees</div>
    }

    const { match } = this.props;
    
    return (
      <ListView 
        employees={this.state.employees}
        match={match}
      />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(List);
