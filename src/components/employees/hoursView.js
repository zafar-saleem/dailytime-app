import React from 'react';

const HoursView = ({ success, message, onFileHours, isShow, onBlur, onFocus }) => (
  <div className="hours-container container">
    <div className={(success) ? 'success' : 'error'}>{message}</div>
    <form onSubmit={onFileHours}>
      <div>
        <label htmlFor="date">Date*</label>
        <input type="date" name="date" id="date" />
      </div>
      <div>
        <label htmlFor="start-time">Start Time*</label>
        <input type="time" name="startTime" id="start-time" />
      </div>
      <div>
        <label htmlFor="finish-time">Finish Time*</label>
        <input type="time" name="finishTime" id="finish-time" />
      </div>
      <div>
        <label className="top" htmlFor="tasks">List of Tasks*</label>
        <textarea cols="40" rows="10" name="tasks" id="tasks" onClick={onFocus} onBlur={onBlur}></textarea>
        <span className={(isShow) ? 'action-indicator show' : 'action-indicator hide'}>Enter Password & Hit Enter to Save</span>
      </div>
      <div>
        <button className="hidden">File My Hours</button>
      </div>
    </form>
  </div>
);

export default HoursView;