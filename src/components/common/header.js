import React from 'react';
import { Link, Route } from 'react-router-dom';

// import Employees from '../../admin/employees/employeesComponent';
import New from '../admin/newComponent';
import Profile from '../admin/profileComponent';
import List from '../admin/listComponent';
// import Logout from '../../logoutComponent';

import Home from '../employees/homeComponent';
import { getCookie } from '../../utils/cookies';

import './header.css';

const Header = ({ match }) => (
  <div className="main-container">
    {
      (getCookie('role') === 'Admin')
      ?
      <ul className="navigation">
        <li><Link to={`${match.path}/list`}>Employees</Link></li>
        <li><Link to={`${match.path}/new`}>New Employee</Link></li>
        <li><Link to={`${match.path}/profile`}>Profile</Link></li>
        <li><Link to={`${match.path}/logout`}>Logout</Link></li>
        <li>Welcome {getCookie('role')}</li>
      </ul>
      :
      <ul className="navigation">
        <li><Link to={`${match.path}/home`}>Home</Link></li>
        <li><Link to={`${match.path}/hours`}>File Hours</Link></li>
        <li><Link to={`${match.path}/logout`}>Logout</Link></li>
        <li>Welcome {getCookie('role')}</li>
      </ul>
    }
    <Route path={`${match.path}/list`} component={List} />
    <Route path={`${match.path}/new`} component={New} />
    <Route path={`${match.path}/home`} component={Profile} />
  </div>
);

export default Header;