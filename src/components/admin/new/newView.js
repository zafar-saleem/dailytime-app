import React, { Component } from 'react';
import './new.css';

const newView = ({ success, message, onSaveNewEmployee, onFocus, onBlur, isShow, onSubmit }) => (
  <div className="container new-container">
    <form onSubmit={onSaveNewEmployee}>
      <div className={(success) ? 'success' : 'error'}>{message}</div>
      <div>
        <label htmlFor='role'>Role*</label>
        <select name='role' id='role' autoFocus>
          <option className='placeholder'>Select New Employee's Role</option>
          <option value='Employee'>Employee</option>
          <option value='Manager'>Manager</option>
          <option value='Admin'>Admin</option>
        </select>
      </div>
      <div>
        <label htmlFor='name'>Name*</label>
        <input type='text' name='name' id='name' placeholder='Enter New Employee Full Name' />
      </div>
      <div>
        <label htmlFor='email'>Email*</label>
        <input type='email' name='email' id='email' placeholder='Enter New Employee Email' />
      </div>
      <div>
        <label htmlFor='position'>Position*</label>
        <input type='text' name='position' id='position' placeholder='Enter New Employee Position such as Developer, CTO, CEO etc' />
      </div>
      <div>
        <label htmlFor='username'>Username*</label>
        <input type='text' name='username' id='username' placeholder='Enter New Employee Username' />
      </div>
      <div>
        <label htmlFor='password'>Password*</label>
        <input type='password' name='password' id='password' placeholder='Enter New Employee Password' onClick={onFocus} onFocus={onFocus} onBlur={onBlur} />
        <span className={(isShow) ? 'action-indicator show' : 'action-indicator hide'}>Enter Password & Hit Enter to Save</span>
      </div>
      <div>
        <button className='hidden'>Save</button>
      </div>
    </form>
  </div>
);

export default newView;