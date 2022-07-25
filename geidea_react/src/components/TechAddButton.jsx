
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';




import GoogleMapComponent from './map';

const techCompanies = [
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 },

];

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

  return (
    <div >
      <Button onClick={handleOpen} style={{marginTop:"10%"}} >Add Subzone</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form>
            <div className="floating-panel">
              <button className="zone">Zone</button>
              <button className="subZone">Subzone</button>
              <button className="delelePoly">Delete</button>

            </div>
            <div className="App">
              <GoogleMapComponent />
            </div>



          </Form>

        </Box>
      </Modal>
    </div>
  );
}
