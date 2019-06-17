import React, { Component } from 'react';

const detailsView = ({ employee }) => (
  <div className="dialog">
    <table>
      <tbody>
        <tr>
          <th>Name</th><td>{employee.name}</td>
        </tr>
        <tr>
          <th>Email</th><td>{employee.email}</td>
        </tr>
        <tr>
          <th>Username</th><td>{employee.username}</td>
        </tr>
        <tr>
          <th>Role</th><td>{employee.role}</td>
        </tr>
        <tr>
          <th>Position</th><td>{employee.position}</td>
        </tr>
      </tbody>
    </table>
    <div className="backdrop"></div>
  </div>
);

export default detailsView;