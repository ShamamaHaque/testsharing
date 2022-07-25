import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

<>
  {" "}
  <Button variant="warning">Warning</Button>{" "}
</>;

export default function LeaderList() {
  // Getting data from API

  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  async function fetchData() {
    var data = [""];
    await axios
      .get("http://localhost:8000/teamleaders/list")
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
    <TableContainer component={Paper} style={{ marginBottom: "80px" }}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead className="table-row">
          <TableRow>
            <StyledTableCell style={{ fontSize: 17 }}>
              Team Leader
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: 17 }}>
              Zone
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: 17 }}>
              Region
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: 17 }}>
              City
            </StyledTableCell>
            <StyledTableCell align="center" style={{ fontSize: 17 }}>
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.map((info) => (
            <StyledTableRow
            // key={info.teamleader}
            >
              <StyledTableCell component="th" scope="row">
                {info.teamLeaderName}
              </StyledTableCell>
              <StyledTableCell align="right">{info.zoneName}</StyledTableCell>
              <StyledTableCell align="right">{info.regionName}</StyledTableCell>
              <StyledTableCell align="right">{info.cityName}</StyledTableCell>
              <StyledTableCell align="right">

                <div class="form-outline mb-4 col-lg-6">
                  <Button type="button" class="btn btn-outline-warning" align="right" >View Details</Button>

                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
