import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";
import swal from "sweetalert";

const ViewById = () => {
  const [searchId, setSearchId] = useState("");
  const [foundAsset, setFoundAsset] = useState(null);

  const handleSearch = () => {
    // Retrieve assets from local storage
    const storedAssets = JSON.parse(localStorage.getItem("assets"));

    if (storedAssets) {
      // Normalize the search ID for comparison
      const searchIdNormalized = searchId.trim();

      // Debugging: Log stored assets and searchId to ensure they're as expected
      console.log("Stored Assets: ", storedAssets);
      console.log("Searching for ID: ", searchIdNormalized);

      // Find the asset with the matching _id
      const asset = storedAssets.find((item) => item._id === searchIdNormalized);

      if (asset) {
        // Update the state with the found asset
        setFoundAsset(asset);
      } else {
        // Show an error if no asset was found
        swal({
          title: "Error!",
          text: "The given ID doesn't match any asset.",
          icon: "error",
          buttons: "OK",
        });
        setFoundAsset(null); // Clear the table if no match is found
      }
    } else {
      // Show an error if no assets are found in local storage
      swal({
        title: "Error!",
        text: "No assets found in local storage.",
        icon: "error",
        buttons: "OK",
      });
      setFoundAsset(null); // Clear the table if no assets are found
    }
  };

  const handleClear = () => {
    setSearchId("");
    setFoundAsset(null); // Clear the table
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "5%" }}>
      <h1 style={{ fontWeight: "bold", fontFamily: "serif" }}>
        Search by ID
        <hr style={{ marginTop: "1px" }} />
      </h1>

      <div style={{ width: "50%", display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          label="Enter Asset ID"
          variant="outlined"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </div>

      {foundAsset && (
        <TableContainer component={Paper} style={{ marginTop: "20px", maxWidth: "50%" }}>
          <Table aria-label="asset table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontFamily: "sans-serif", fontWeight: "bold", backgroundColor: "gray" }}>ID NUMBER</TableCell>
                <TableCell style={{ fontFamily: "sans-serif", fontWeight: "bold", backgroundColor: "gray" }}>Asset Name</TableCell>
                <TableCell style={{ fontFamily: "sans-serif", fontWeight: "bold", backgroundColor: "gray" }}>Type</TableCell>
                <TableCell style={{ fontFamily: "sans-serif", fontWeight: "bold", backgroundColor: "gray" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{foundAsset._id}</TableCell>
                <TableCell>{foundAsset.name}</TableCell>
                <TableCell>{foundAsset.type}</TableCell>
                <TableCell>{foundAsset.status}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ViewById;
