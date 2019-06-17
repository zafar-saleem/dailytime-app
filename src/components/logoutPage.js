import React, { Component } from 'react';
import { setCookie } from '../utils/cookies';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    setCookie('token', null, 0);
    setCookie('role', null, 0);
    setCookie('name', null, 0);
    setCookie('id', null, 0);
  }
  
  render() {
    return(
      <div>
        <Redirect to='/' />
      </div>
    );
  }
}

export default Logout;