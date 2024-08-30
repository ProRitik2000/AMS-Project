import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AssetTable = () => {
  const [assets, setAssets] = useState([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const storedAssets = JSON.parse(localStorage.getItem("assets"));

    if (storedAssets) {
      setAssets(storedAssets);
    }
  }, []);

  const handleAddAssets = async (e) => {
    e.preventDefault();

    if (!name || !type || !status) {
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
          name,
          type,
          status,
        }
      );

      if (response.data) {
        const updatedAssets = [...assets, response.data];
        setAssets(updatedAssets);
        localStorage.setItem("assets", JSON.stringify(updatedAssets)); // Save to local storage
        swal({
          title: "Success!",
          text: "Asset added successfully!",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          setAssets([...assets, response.data]); // Add the new asset to the table

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

  const handlePrevClick = () => {
    navigate("/Home"); // Navigate to the home page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "5%",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontFamily: "serif" }}>
        View all<hr style={{ marginTop: "1px" }}></hr>
      </h1>

      <div style={{ width: "50%" }}>
        <TableContainer
          component={Paper}
          style={{ marginTop: "0px", maxHeight: "300px", overflowY: "auto" }}
        >
          <Table
            aria-label="asset table"
            style={{ backgroundColor: "transparent" }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                  }}
                >
                  S.No.
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                  }}
                >
                  Type
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
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
            width: "100%",
            display: "flex",
            justifyContent: "center", // Center align buttons horizontally
            gap: "10px",
          }}
        >
          <Button
            text="center"
            variant="contained"
            color="info"
            onClick={handlePrevClick}
            style={{ marginTop: "10px" }}
          >
            PREV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssetTable;
