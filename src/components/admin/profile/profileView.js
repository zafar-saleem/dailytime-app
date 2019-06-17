import React, { Component } from 'react';

const profileView = ({ profile }) => (
  <div className="container">
    <table>
      <thead>
        <tr>
          <th>
            Username
          </th>
          <th>
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {profile.map(item => (
          <tr key={item._id}>
            <td>{item.username}</td>
            <td>{item.role}</td>
          </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export default profileView;