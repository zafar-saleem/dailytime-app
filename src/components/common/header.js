import React from 'react';
import { Link, Route } from 'react-router-dom';

// import Employees from '../../admin/employees/employeesComponent';
import New from '../admin/newComponent';
import Profile from '../admin/profileComponent';
import List from '../admin/listComponent';
// import Logout from '../../logoutComponent';
// import Project from '../../employees/project/createProjectComponent';
import { getCookie } from '../../utils/cookies';

const Header = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.path}/list`}>Employees</Link></li>
      <li>
        {
          (getCookie('role') === 'Admin')
          ?
          <Link to={`${match.path}/new`}>New</Link>
          :
          <Link to={`${match.path}/create`}>Create Project</Link>
        }
      </li>
      <li><Link to={`${match.path}/profile`}>Profile</Link></li>
      <li><Link to={`${match.path}/logout`}>Logout</Link></li>
    </ul>
    <div>Welcome {getCookie('role')}</div>
    <Route path={`${match.path}/list`} component={List} />
    <Route path={`${match.path}/new`} component={New} />
    <Route path={`${match.path}/profile`} component={Profile} />
  </div>
);

export default Header;