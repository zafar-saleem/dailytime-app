import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const listView = ({ employees, match }) => (
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
        {employees.map(li => (
          <tr key={li._id}>
            <td>
              <Link className='name' to={`${match.path}/employees/details/${li._id}`}>{li.name}</Link>
            </td>
            <td>
              <Link className='name' to={`${match.path}/employees/details/${li._id}`}>{li.username}</Link>
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

export default listView;