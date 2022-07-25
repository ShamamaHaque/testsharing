import { React, useState } from "react";
import TextField from "@mui/material/TextField";

import "../App.css";

export default function AddSearch() {
  return (
    <div className="main">
      <h3 className="heading">Team Leader</h3>
      <div class="row justify-content-start">
        <div class="form-outline mb-4">
          <label className="form-label">Zone</label>
          <div className="search"  style={{width:"18%"}}>
            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Zone"
            />
            

          </div>
          
        </div>



      </div>


    </div>

  );
}

