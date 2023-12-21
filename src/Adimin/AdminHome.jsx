import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import bghome from '../assets/bghome.jpg';
import AdminNav from './AdminNav';

function AdminHome() {
  return (
    <>
    <AdminNav/>
    <Container fluid>
      <Row>
        <Col className="adminHomePage" style={{
          position: 'relative',
          backgroundImage: `url(${bghome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}>
          <h1 className="text-center text-danger" style={{ zIndex: 1 }}>Home page</h1>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'linear-gradient(to right top, #c70039, #b50056, #98166b, #742977, #4c3378, #402e69, #362959, #2c244a, #2c1a34, #241321, #180b12, #000000)',
            opacity: 0.8,
            height: '100%',
          }}></div>
         

        </Col>
      </Row>
    </Container>
    </>
  );
}

export default AdminHome;
