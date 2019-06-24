import React, { userState } from 'react';
import { Redirect } from 'react-router-dom';

const detailsView = ({ employee, hours, props, onHandleClose }) => {
  return (
    <div className='details'>
      <div className="backdrop" onClick={onHandleClose}></div>
      <div className='dialog'>
        <button type="button" className="btn btn-close" onClick={onHandleClose}>Close</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.username}</td>
              <td>{employee.role}</td>
              <td>{employee.position}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>Finish Time</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {hours.map(item => (
              <tr key={item._id}>
                <td>{item.date}</td>
                <td>{item.startTime}</td>
                <td>{item.finishTime}</td>
                <td>{item.tasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default detailsView;