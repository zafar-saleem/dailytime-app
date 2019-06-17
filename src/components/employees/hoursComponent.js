import React, { Component } from 'react';

class Hours extends Component {
  render() {
    return (
      <div>
        <h3>Enter Your Work Hours Below:</h3>
        <form>
          <div>
            <label>Date</label>
            <input type="date" name="date" />
          </div>
          <div>
            <label>Start Time</label>
            <input type="time" name="start-time" />
          </div>
          <div>
            <label>Finish Time</label>
            <input type="time" name="finish-time" />
          </div>
          <div>
            <label>List of Tasks</label>
            <textarea cols="40" rows="10" name="tasks"></textarea>
          </div>
          <div>
            <button>File My Hours</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Hours;