import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Col,Row } from 'react-bootstrap';
import "../App.css";

export default function TechSearch() {
  return (
    <div className="main">
      <h3 className="heading">Technician List</h3>
      <div className="row ">
        <div className="form-outline mb-4 col-lg-4">
          <label className="form-label">Subzone</label>
          <div className="search" style={{width:"35%"}}>
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Zone"
            />

          </div>
        </div>
        <div className="form-outline mb-4 col-lg-4">
          <label className="form-label">Technician Name</label>
          <div className="search" style={{width:"35%"}}>
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Team Leader Name "
            />

          </div>
        </div>




      </div>
      




    </div>

  );
}

