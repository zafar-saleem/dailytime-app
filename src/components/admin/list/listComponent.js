import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from '../details/detailsComponent';
import ListView from './listView';
import Dialog from '../../common/dialog/dialog';

import {
  employeesListAction,
  employeeUpdateAction
} from '../../../actions/admin';


class List extends Component {
  state = {
    employees: [],
    success: undefined,
    message: undefined,
    isDialog: false,
    employee: undefined
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

  onUpdateHandle(employee) {
    if (this.state.isDialog) {
      this.setState({ isDialog: false });
    } else {
      this.setState({ isDialog: true }, () => {
        this.state.employees.map(item => {
          if (item._id === employee.id) {
            this.setState({ employee: item });
          }
        });
      });
    }
  }

  onHandleUpdateEmployee(event) {
    event.preventDefault();
    const employee = {
      name: event.target.name.value,
      email: event.target.email.value,
      position: event.target.position.value,
      username: event.target.username.value,
      password: event.target.password.value,
      role: event.target.role.value,
      id: this.state.employee._id
    };

    this.props.dispatch(employeeUpdateAction({
      employee: employee
    }));
  }

  render() {
    if (this.state.employees === undefined || this.state.employees.length === 0) {
      return <div>No Employees</div>
    }

    const { match } = this.props;
    
    return (
      <div>
        <ListView 
          employees={this.state.employees}
          match={match}
          onUpdateHandle={this.onUpdateHandle.bind(this)}
        />
        <Dialog
          onShow={this.state.isDialog}
          employee={this.state.employee}
          onHandleAction={this.onHandleUpdateEmployee.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(List);
