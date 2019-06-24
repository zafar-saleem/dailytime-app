import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const profileView = ({ profile }) => (
  <div className="container">
    <table>
      <tbody>
        <tr>
          <th>Username:</th><td className='uppercase'>{profile.username}</td>
        </tr>
        <tr>
          <th>Role:</th><td className='uppercase'>{profile.role}</td>
        </tr>
        <tr>
          <th>Email:</th><td className='uppercase'>{profile.email}</td>
        </tr>
        <tr>
          <th>Password:</th><td className='uppercase'>********</td>
        </tr>
        <tr className="last">
          <th><Link to="" className="right">Edit</Link></th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default profileView;