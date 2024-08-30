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
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AssetTable = () => {
  const [assets, setAssets] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState("");
  const [editingAsset, setEditingAsset] = useState(null);
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedAssets = JSON.parse(localStorage.getItem("assets"));
    if (storedAssets) {
      setAssets(storedAssets);
    }
  }, []);

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

  const handleAddAsset = async (e) => {
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

    if (!validateName(name)) {
      setNameError(true);
      setNameHelperText("Asset name must only contain letters.");
      return;
    } else {
      setNameError(false);
      setNameHelperText("");
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/assets/addAssets",
        { name, type, status }
      );

      if (response.data) {
        const updatedAssets = [...assets, response.data];
        setAssets(updatedAssets);
        localStorage.setItem("assets", JSON.stringify(updatedAssets));
        swal({
          title: "Success!",
          text: "Asset added successfully!",
          icon: "success",
          buttons: "OK",
        }).then(() => {
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

  const handleEditClick = (asset) => {
    setEditingAsset(asset);
    setEditName(asset.name);
    setEditType(asset.type);
    setEditStatus(asset.status);
  };

  const handleUpdateAsset = (e) => {
    e.preventDefault();

    if (!editName || !editType || !editStatus) {
      swal({
        title: "Error!",
        text: "All fields are required.",
        icon: "warning",
        buttons: "OK",
      });
      return;
    }

    const updatedAssets = assets.map((asset) =>
      asset.id === editingAsset.id
        ? { ...asset, name: editName, type: editType, status: editStatus }
        : asset
    );

    setAssets(updatedAssets);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
    swal({
      title: "Success!",
      text: "Asset updated successfully!",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      setEditingAsset(null);
      setEditName("");
      setEditType("");
      setEditStatus("");
    });
  };

  const handlePrevClick = () => {
    navigate("/Home");
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
        Edit Assets<hr style={{ marginTop: "1px" }}></hr>
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
                <TableCell
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>{asset.id}</TableCell>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditClick(asset)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {editingAsset && (
          <div style={{ marginTop: "20px" }}>
            <h2>Edit Asset</h2>
            <form onSubmit={handleUpdateAsset}>
              <TextField
                label="Asset Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <Select
                value={editType}
                onChange={(e) => setEditType(e.target.value)}
                displayEmpty
                style={{ marginBottom: "10px" }}
              >
                <MenuItem value="" disabled>
                  Select Type
                </MenuItem>
                <MenuItem value="Vehicle">Vehicle</MenuItem>
                <MenuItem value="Furniture">Furniture</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              <Select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                displayEmpty
                style={{ marginBottom: "10px" }}
              >
                <MenuItem value="" disabled>
                  Select Status
                </MenuItem>
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="In-use">In-use</MenuItem>
                <MenuItem value="Maintenance">Maintenance</MenuItem>
              </Select>
              <Button type="submit" variant="contained" color="success">
                Update
              </Button>
              <Button
                onClick={() => setEditingAsset(null)}
                variant="contained"
                color="info"
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetTable;
