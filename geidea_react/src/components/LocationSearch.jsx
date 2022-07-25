import { React, useState } from "react";
import TextField from "@mui/material/TextField";

import "../App.css";

export default function LocSearch() {
  return (
    <div className="main">
      <h3 className="heading">Locations</h3>
      <div class="row justify-content-start">
        <div class="form-outline mb-4">
          <label className="form-label">Search Location</label>
          <div className="search"  style={{width:'18%'}}>
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search Location"
            />

          </div>
        </div>
        


      </div>


    </div>

  );
}

