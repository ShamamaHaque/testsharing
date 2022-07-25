import { React, useState } from "react";
import TextField from "@mui/material/TextField";

import "../App.css";

export default function Sales() {
  return (
    <div className="main">
    { /*  <h5 className="heading">Team Leader List</h5>*/ }
      <div class="row justify-content-start">
        <div class="form-outline mb-4 col-lg-2">
          <label className="search-box-label">POS Type</label>
          <div className="search-box ">
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="POS Type"
            />

          </div>
        </div>
        <div class="form-outline mb-4 col-lg-2" >
          <label className="search-box-label">Account Nnmber</label>
          <div className="search-box" >
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Account Number "
            />

          </div>
        </div>
        <div class="form-outline mb-4 col-lg-2">
          <label className="search-box-label">IBAN</label>
          <div className="search-box" >
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="IBAN"
            />

          </div>
        </div>
        <div class="form-outline mb-4 col-lg-2" >
          <label className="search-box-label">Terminal ID</label>
          <div className="search-box" >
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Terminal ID"
            />

          </div>
        </div>
        <div class="form-outline mb-4 col-lg-2">
          <label className="search-box-label">MerchantID</label>
          <div className="search-box">
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Merchant ID"
            />

          </div>
        </div>
        <div class="form-outline mb-4 col-lg-2" >
          <label className="search-box-label">Merchant List Name</label>
          <div className="search-box" >
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Name "
            />

          </div>
        </div>
     
        <div class="form-outline mb-4 col-lg-2" >
          <label className="search-box-label">Location</label>
          <div className="search-box" >
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Location"
            />

          </div>
        </div>







      </div>


    </div>

  );
}

