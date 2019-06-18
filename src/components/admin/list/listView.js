import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class ListView extends Component {
  render() {
    return (
      <div className="container">
        <h1>Employees</h1>
        <table>
          <thead>
            <tr>
              <th><a href='#'>Name</a></th>
              <th><a href='#' className='padding'>Username</a></th>
              <th><a href='#' className='padding width'>Position</a></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map(li => (
              <tr key={li._id}>
                <td>
                  <Link className='name' to={`${this.props.match.path}/employees/details/${li._id}`}>{li.name}</Link>
                </td>
                <td>
                  <Link className='name' to={`${this.props.match.path}/employees/details/${li._id}`}>{li.username}</Link>
                </td>
                <td className='uppercase'>
                  {li.position}
                </td>
                <td><button onClick={() => this.props.onUpdateHandle({ id: li._id, name: li.name, username: li.username, email: li.email, position: li.position })}>Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListView;