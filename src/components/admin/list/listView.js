import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

import './list.css';

class ListView extends Component {
  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Position</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((li, index) => (
              <tr key={li._id} className={(this.props.employees.length - 1 == index) ? 'last' : 'none'}>
                <td>
                  <Link className='name' to={`${this.props.match.path}/employees/details/${li._id}`}>{li.name}</Link>
                </td>
                <td>
                  <Link className='name' to={`${this.props.match.path}/employees/details/${li._id}`}>{li.username}</Link>
                </td>
                <td>
                  {li.email}
                </td>
                <td className='uppercase'>
                  {li.position}
                </td>
                <td className="actions">
                  <button className="links link" onClick={() => this.props.onUpdateHandle({ id: li._id, name: li.name, username: li.username, email: li.email, position: li.position })}>Edit</button>
                  <button className="links link" onClick={() => this.props.onDeleteHandle(li._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListView;