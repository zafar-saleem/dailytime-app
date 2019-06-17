import React, { Component } from 'react';

const newView = ({ success, message, onSaveNewEmployee }) => (
  <div className="container">
    <div className={(success) ? 'success' : 'error'}>{message}</div>
    <form onSubmit={onSaveNewEmployee}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <div>
        <label htmlFor='position'>Position</label>
        <input type='text' name='position' id='position' />
      </div>
      <div>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' id='username' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </div>
      <div>
        <label htmlFor='role'>Role</label>
        <select name='role' id='role'>
          <option>Select One</option>
          <option value='Employee'>Employee</option>
          <option value='Manager'>Manager</option>
          <option value='Admin'>Admin</option>
        </select>
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>
);

export default newView;