
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



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

  return (
    <div >
      <Button onClick={handleOpen} style={{marginTop:"10%"}}>Create New Location</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
            <div>
            
              <h4 style={{ marginBottom: "10%",marginLeft:"5%" }}>Add New Location </h4>
              
            </div>

            <div>
              <h5 style={{ paddingLeft: "6%" }}>Location Type</h5>
            </div>

          <FormControl fullWidth>

            <InputLabel id="demo-simple-select-label">Location Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={add}
              label="Location Type"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
