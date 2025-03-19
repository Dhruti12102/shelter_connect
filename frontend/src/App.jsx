import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login';
import Addstaff from './components/Addstaff';
import Rsl from './Table/Rsl';
import Layout from './components/Layout';
import StaffDashboard from './components/StaffDashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserTable from '../src/Table/UserTable';
import PropertyTable from '../src/Table/PropertyTable';
import StaffTable from './Table/StaffTable';
import Addproperty from './components/Addproperty';
// import Addtenant from './components/Addtenant';
import { AuthProvider } from './common/AuthContext';

import ParentComponent from './components/ParentComponent';
import TenantManagement from './components/TenantManagement';
import TenantTable from './Table/TenantTable';
import Logout from './components/Logout';
import RslListing from './components/RslListing';
import RslTable from './Table/RslTable';
// import { Role } from './common/Role';
// import { AuthContext } from './common/AuthContext';
// import { UnAuthorize } from './common/UnAuthorize';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes >
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/usertable" element={<UserTable />} />
          <Route path="/staffdashboard" element={<StaffDashboard />} />
          <Route path='/stafftable' element={<StaffTable />} />
          <Route path='/rsl' element={<Rsl />} />
          <Route path='/addstaff' element={<Addstaff />} />
          <Route path='/addproperty' element={<Addproperty />} />
          <Route path='/propertytable' element={<PropertyTable />} />
          <Route path='/parent' element={<ParentComponent />} />
          <Route path='/tenant' element={<TenantManagement />} />
          <Route path='/tenantdash' element={<TenantTable />} />
          <Route path='/rsllisting' element={<RslListing />} />
          {/* <Route path='/rsladdform' element={<RslAddForm />} /> */}
          <Route path='/rsltable' element={<RslTable />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

