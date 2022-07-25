
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Select from 'react-select';
import TextField from "@mui/material/TextField";
///import 'bootstrap/dist/css/bootstrap.min.css';


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
      <Button style={{marginTop:"10%"}} >Team Leader On Zone</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form>
           

          </Form>

        </Box>
      </Modal>
    </div>
  );
}

