import React, { Component } from 'react';

const detailsView = ({ name, email, username, role, position }) => (
  <div className="dialog">
    <table>
      <tbody>
        <tr>
          <th>Name</th><td>{name}</td>
        </tr>
        <tr>
          <th>Email</th><td>{email}</td>
        </tr>
        <tr>
          <th>Username</th><td>{username}</td>
        </tr>
        <tr>
          <th>Role</th><td>{role}</td>
        </tr>
        <tr>
          <th>Position</th><td>{position}</td>
        </tr>
      </tbody>
    </table>
    <div className="backdrop"></div>
  </div>
);

export default detailsView;