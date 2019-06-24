import React, { Component } from 'react';
import './dialog.css';

class Dialog extends Component {

  render() {
    if (this.props.employee === undefined) {
      return <div></div>
    }

    return (
      <div>
        <div className={(this.props.onShow) ? 'backdrop show' : 'backdrop hide'} onClick={this.props.onHandleClose}></div>
        <div className={(this.props.onShow) ? 'dialog show' : 'dialog hide'}>
          <form onSubmit={this.props.onHandleAction}>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' defaultValue={this.props.employee.name} />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' defaultValue={this.props.employee.email} />
            </div>
            <div>
              <label htmlFor='position'>Position</label>
              <input type='text' name='position' id='position' defaultValue={this.props.employee.position} />
            </div>
            <div>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username' defaultValue={this.props.employee.username} />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' defaultValue='********' />
            </div>
            <div>
              <label htmlFor='role'>Role</label>
              <select name='role' id='role' defaultValue={this.props.employee.role}>
                <option>Select One</option>
                <option value='Employee'>Employee</option>
                <option value='Manager'>Manager</option>
                <option value='Admin'>Admin</option>
              </select>
            </div>
            <div>
              <button>Update {this.props.employee.name}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Dialog;