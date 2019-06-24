import React, { Component } from 'react';
import './dialog.css';

class Dialog extends Component {

  state = {
    isDialog: false,
    isShow: false
  }

  onFocus() {
    console.log('aksjhdkajsdh')
    this.setState({ isShow: true });
  }

  onBlur() {
    this.setState({ isShow: false });
  }

  render() {
    if (this.props.employee === undefined) {
      return <div></div>
    }

    let success, message;

    if (this.props.props.updateEmployeeReducer.hasOwnProperty('response')) {
      success = this.props.props.updateEmployeeReducer.response.success;
      message = this.props.props.updateEmployeeReducer.response.message;
    }

    return (
      <div>
        <div className={(this.props.onShow) ? 'backdrop show' : 'backdrop hide'} onClick={this.props.onHandleClose}></div>
        <div className={(this.props.onShow) ? 'dialog show' : 'dialog hide'}>
          <button className='btn btn-close' onClick={this.props.onHandleClose}>close</button>
          <form onSubmit={this.props.onHandleAction}>
            <div className={(success) ? 'success' : 'error'}>{message}</div>
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
              <input type='password' name='password' id='password' defaultValue='********' onClick={this.onFocus.bind(this)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} />
              <span className={(this.state.isShow) ? 'action-indicator show' : 'action-indicator hide'}>Enter Password & Hit Enter to Update</span>
            </div>
            <div>
              <button className='hidden'>Update {this.props.employee.name}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Dialog;