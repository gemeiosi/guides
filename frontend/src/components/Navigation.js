import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../static/logo.jpeg'
import "../App.css";
import {NavLink} from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="40"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            Guide Management System
        </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
<CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
      Navigation
    </CDBSidebarHeader>
    <CDBSidebarContent>
      <CDBSidebarMenu>
        <NavLink exact to="/" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/guides" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="list">Guides List</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/manage" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Manage Guides</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div>
    </div>
  );
};

export default Navigation;