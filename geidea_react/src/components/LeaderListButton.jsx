
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import axios from "axios";

// http://localhost:8000/regions/registered/





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [add, setadd] = React.useState('');
  const handleChange = (event) => setadd(event.target.value);



  //API call to get all teamleaders list
  const [apiData_2, setapiData_2] = useState([]);
  useEffect(() => {
    callApi_2();
  }, []);

  async function fetchData_2() {
    var data_2 = [""];
    await axios
      .get("http://localhost:8000/teamleaders/registered")
      .then((res) => {
        data_2 = res.data.myData;
      })
      .catch((err) => console.log(err));
    return data_2;
  }
  var myData_2;
  async function callApi_2() {
    // console.log("Call api called");
    setapiData_2(await fetchData_2());
    // console.log(apiData);
  }



  //API call to get all regions
  const [apiData_1, setapiData_1] = useState([]);
  useEffect(() => {
    callApi_1();
  }, []);

  async function fetchData_1() {
    var data_1 = [""];
    await axios
      .get("http://localhost:8000/regions/registered")
      .then((res) => {
        data_1 = res.data.myData;
      })
      .catch((err) => console.log(err));
    return data_1;
  }
  var myData_1;
  async function callApi_1() {
    // console.log("Call api called");
    setapiData_1(await fetchData_1());
    // console.log(apiData);
  }



 //API call  to get all ccities
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  async function fetchData() {
    var data = [""];
    await axios
      .get("http://localhost:8000/regions/cities")
      .then((res) => {
        data = res.data.myData;
      })
      .catch((err) => console.log(err));
    return data;
  }
  var myData;
  async function callApi() {
    // console.log("Call api called");
    setapiData(await fetchData());
    // console.log(apiData);
  }

  return (
    <div >
      <Button onClick={handleOpen} style={{ marginTop: "10%" }}>Assign Team Leader</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>

            <h4 style={{ marginBottom: "10%",marginLeft:"5%" }}>Assign Team Leader</h4>

          </div>
          <div>
              <h5 style={{ paddingLeft: "6%" }}>Team Leader Name</h5>
            </div>

          <FormControl fullWidth>

            <InputLabel id="demo-simple-select-label">Team Leader Name</InputLabel>
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={add}
              label="Team Leader Name"
              onChange={handleChange}
            >
              {apiData_2.map((info) => (
              <MenuItem value={info.teamLeaderID}>{info.teamLeaderName}</MenuItem>
              ))}
              {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
              
            </Select>
            
            </FormControl>
            

            
          <div>
              <h5 style={{ paddingLeft: "6%" }}>Region</h5>
            </div>

          <FormControl fullWidth>

            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={add}
              label="Region"
              onChange={handleChange}
            >
              {apiData_1.map((info) => (
              <MenuItem value={info.regionID}>{info.regionName}</MenuItem>
              ))}
              {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            
            </FormControl>

            <div>
              <h5 style={{ paddingLeft: "6%" }}>City</h5>
            </div>

          <FormControl fullWidth>

            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={add}
              label="City"
              onChange={handleChange}
            >
              {apiData.map((info) => (
              <MenuItem value={info.cityID}>{info.cityName}</MenuItem>
              ))}
              
            </Select>
            </FormControl>
            <div>
              <h5 style={{ paddingLeft: "6%" }}>Enter Zone</h5>
            </div>


            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Enter Zone"
            />


            <div>
              <h5 style={{ paddingLeft: "6%" }}>Location Details</h5>
            </div>


            <TextField className="form-field"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Location Details"
            />



        


          <div class="form-outline mb-4 col-lg-2" style={{ marginTop: "5%" }}>
            <Button as="input" type="submit" value="Submit" />{' '}



          </div>

          <div class="form-outline mb-4 col-lg-4" style={{ marginTop: "5%" }}>
            <Button onClick={handleClose} as="input" type="submit" value="Cancel" />{' '}



          </div>







        </Box>
      </Modal>
    </div>
  );
}
