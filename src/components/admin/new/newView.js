import React, { Component } from 'react';
import './new.css';

const newView = ({ success, message, onSaveNewEmployee, onFocus, onBlur, isShow, onSubmit }) => (
  <div className="container new-container">
    <div className={(success) ? 'success' : 'error'}>{message}</div>
    <form onSubmit={onSaveNewEmployee}>
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
        <input type='password' name='password' id='password' onClick={onFocus} onBlur={onBlur} onKeyDown={onSubmit} />
        <span className={(isShow) ? 'action-indicator show' : 'action-indicator hide'}>Enter Password & Hit Enter to Save</span>
      </div>
      <div>
        <button className='hidden'>Save</button>
      </div>
    </form>
  </div>
);

export default newView;