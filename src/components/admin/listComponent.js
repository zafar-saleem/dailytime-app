import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { employeesListAction } from '../../actions/admin';

class List extends Component {
  state = {
    employees: [],
    success: undefined,
    message: undefined
  }

  constructor(props) {
    super(props);
    this.props.dispatch(employeesListAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.listReducer.hasOwnProperty('response')) {
      return {
        employees: nextProps.listReducer.response
      }
    }

    return {
      employees: undefined,
      success: undefined,
      message: undefined
    }
  }

  render() {
    if (this.state.employees === undefined || this.state.employees.length === 0) {
      return <div>No Employees</div>
    }
    
    return (
      <div className="container">
        <h1>Employees</h1>
        <table>
          <thead>
            <tr>
              <th><a href='#'>Name</a></th>
              <th><a href='#' className='padding'>Username</a></th>
              <th><a href='#' className='padding width'>Position</a></th>
            </tr>
          </thead>
          <tbody>
          {this.state.employees.map(li => (
            <tr key={li._id}>
              <td>
                <Link className='name uppercase' to={`/employee/details/${li._id}`}>{li.name}</Link>
              </td>
              <td>
                <Link className='name' to={`/employee/details/${li._id}`}>{li.username}</Link>
              </td>
              <td className='uppercase'>
                {li.position}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(List);
