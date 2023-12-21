import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AdminNav from "./AdminNav";
import bgvideo from '../assets/bg-video.mp4';
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EngineeringIcon from '@mui/icons-material/Engineering';

function AdminHome() {
  return (
    <>

      <div
        className="adminHomerr col-12"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video src={bgvideo} autoPlay loop muted style={{ width: '100%', position: 'relative', zIndex: 0 }} />
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundImage: 'linear-gradient(to bottom, rgba(13, 22, 20, 0.9), rgba(27, 34, 34, 0.9), rgba(40, 46, 47, 0.9), rgba(55, 58, 60, 0.9), rgba(70, 71, 73, 0.9), rgba(70, 70, 71, 0.9), rgba(69, 69, 70, 0.9), rgba(68, 68, 68, 0.9), rgba(52, 52, 52, 0.9), rgba(36, 36, 36, 0.9), rgba(22, 22, 22, 0.9), rgba(0, 0, 0, 0.9))',

          }}
        />
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
          <Row>
          <Col md={6} className="col-6">
            <EngineeringIcon fontSize="large" style={{fontSize:'20vh', color:'white'}}/>
  {/* First Part: 3 Links */}
  <div>
    <Link to={"/users"} className="d-inline-block mb-3">
      <div className="allusrss text-light">
        <div className="logo-container">
          <GroupIcon fontSize="large" />
        </div>
        <h4 className="d-inline">all users</h4>
      </div>
    </Link>

    <Link to={"/allproducts"} className="d-inline-block p-4 mb-3">
      <div className="alllproductss text-light">
        <div className="logo-container">
          <ProductionQuantityLimitsIcon fontSize="large" />
        </div>
        <h4 className="d-inline">all Products</h4>
      </div>
    </Link>

    <Link to={"/adproduct"} className="d-inline-block mb-3">
      <div className="addprdct text-light">
        <div className="logo-container">
          <PrecisionManufacturingIcon fontSize="large" />
        </div>
        <h4 className="d-inline">add a product</h4>
      </div>
    </Link>
    <div className="text-light">
      <h5 className="text-light">What is Lorem Ipsum?</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
    </div>
  </div>
</Col>


            {/* Second Part: h4 and p tags */}
            <Col md={6} className="adminhoeml col-6 text-light">
              <AdminPanelSettingsIcon fontSize="large" style={{ fontSize: "20vh" }}/>
              <h4>What is Lorem Ipsum?</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AdminHome;
