import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import swal from "sweetalert";
import axios from "axios";

const AssetTable = () => {
  const [assets, setAssets] = useState([]);
  const [serialNumber, setSerialNumber] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleAddAsset = async (e) => {
    e.preventDefault();

    if (!serialNumber || !name || !type || !status) {
      swal({
        title: "Error!",
        text: "All fields are required.",
        icon: "warning",
        buttons: "OK",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/assets/addAssets",
        {
          serialNumber,
          name,
          type,
          status,
        }
      );

      if (response.data) {
        swal({
          title: "Success!",
          text: "Asset added successfully!",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          setAssets([...assets, response.data]); // Add the new asset to the table
          setSerialNumber("");
          setName("");
          setType("");
          setStatus("");
        });
      }
    } catch (error) {
      swal({
        title: "Error!",
        text: error.response.data.message || "Error adding asset.",
        icon: "error",
        buttons: "OK",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Add Asset</h1>
      <div style={{ width: "50%" }}>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table
            aria-label="asset table"
            style={{ backgroundColor: "transparent" }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  S.No.
                </TableCell>
                <TableCell
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  Type
                </TableCell>
                <TableCell
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset, index) => (
                <TableRow key={index}>
                  <TableCell>{asset.serialNumber}</TableCell>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <TextField
            label="Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            style={{ flex: "1 1 calc(50% - 10px)" }}
          />
          <TextField
            label="Asset Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ flex: "1 1 calc(50% - 10px)" }}
          />
          <TextField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ flex: "1 1 calc(50% - 10px)" }}
          />
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            displayEmpty
            style={{ flex: "1 1 calc(50% - 10px)" }}
          >
            <MenuItem value="" disabled>
              Select Status
            </MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="In-use">In-use</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="success"
            onClick={handleAddAsset}
            style={{ marginTop: "15px", width: "100%" }}
          >
            Add Asset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssetTable;
