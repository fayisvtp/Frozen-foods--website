import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function AdminNav() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <nav aria-label='breadcrumb'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
            
              <a href='/adproduct'>Add product</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href='#'>Library</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <a href='#'>Data</a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
}