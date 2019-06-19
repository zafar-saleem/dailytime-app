import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// import Employees from '../../admin/employees/employeesComponent';
import New from '../admin/new/newComponent';
import Profile from '../admin/profile/profileComponent';
import Details from '../admin/details/detailsComponent';
import List from '../admin/list/listComponent';
import Logout from '../logoutPage';

import Hours from '../employees/hoursComponent';
import { getCookie } from '../../utils/cookies';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        {
          (getCookie('role') === 'Admin')
          ?
          <ul className="navigation">
            <li><Link to={`${this.props.match.path}/list`} className={(this.props.location.pathname.split('/')[2] === 'list') ? 'active' : 'inactive'}>Employees</Link></li>
            <li><Link to={`${this.props.match.path}/new`} className={(this.props.location.pathname.split('/')[2] === 'new') ? 'active' : 'inactive'}>New Employee</Link></li>
            <li><Link to={`${this.props.match.path}/profile`} className={(this.props.location.pathname.split('/')[2] === 'profile') ? 'active' : 'inactive'}>Profile</Link></li>
            <li><Link to={`${this.props.match.path}/logout`} className={(this.props.location.pathname.split('/')[2] === 'logout') ? 'active' : 'inactive'}>Logout</Link></li>
            <li>Welcome {getCookie('role')}</li>
          </ul>
          :
          <ul className="navigation">
            <li><Link to={`${this.props.match.path}/home`} className={(this.props.location.pathname.split('/')[2] === 'home') ? 'active' : 'inactive'}>Home</Link></li>
            <li><Link to={`${this.props.match.path}/hours`} className={(this.props.location.pathname.split('/')[2] === 'hours') ? 'active' : 'inactive'}>File Hours</Link></li>
            <li><Link to={`${this.props.match.path}/logout`} className={(this.props.location.pathname.split('/')[2] === 'logout') ? 'active' : 'inactive'}>Logout</Link></li>
            <li>Welcome {getCookie('role')}</li>
          </ul>
        }
        <Route path={`${this.props.match.path}/list`} component={List} />
        <Route path={`${this.props.match.path}/new`} component={New} />
        <Route path={`${this.props.match.path}/home`} component={Profile} />
        <Route path={`${this.props.match.path}/profile`} component={Profile} />
        <Route path={`${this.props.match.path}/hours`} component={Hours} />
        <Route path={`${this.props.match.path}/logout`} component={Logout} />
        <Route path={`${this.props.match.path}/list/employees/details/:id`} component={Details} />
      </div>
    );
  }
}

export default Header;