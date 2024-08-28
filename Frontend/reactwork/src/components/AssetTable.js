// AssetTable.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import swal from 'sweetalert'; // Import SweetAlert
import axios from 'axios';

const AssetTable = () => {
  const [assets, setAssets] = useState([]);
  const [newAsset, setNewAsset] = useState({ serialNumber: '', name: '', type: '', status: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAsset({ ...newAsset, [name]: value });
  };

  const handleAddAsset = async() => {
    if ( newAsset.serialNumber && newAsset.name && newAsset.type  && newAsset.status) {
      setAssets([...assets, newAsset]);
      setNewAsset({ serialNumber: '',name: '', type: '', status: '' }); // Clear the form fields

     
      try {
        const response = await axios.post('http://localhost:5000/api/assets/addAssets',newAsset);


        if(response.status===201){
     
          setNewAsset({serialNumber:'',name:'',type:'',status:''})
     
      // Show success message
      swal({
        title: 'Success!',
        text: 'Data added successfully!',
        icon: 'success',
        button: 'OK',
      });
    } 
  } catch (error) {
    console.error('Error saving asset:', error);
    swal({
      title: 'Error!',
      text: 'Failed to save data to the database.',
      icon: 'error',
      button: 'OK',
    });
  }
} else {
  // Show error message if any field is empty
  swal({
    title: 'Error!',
    text: 'Please fill all the fields.',
    icon: 'error',
    button: 'OK',
  });
}
};

  return (
    <>
      <h1 style={{ fontWeight: 'bold' }}>Add Asset</h1>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table aria-label="asset table" style={{ backgroundColor: 'transparent' }}>
          <TableHead >
            <TableRow>
              <TableCell style={{ fontFamily:"serif",fontWeight:"bolder"}}>S.No.</TableCell>
              <TableCell style={{ fontFamily: 'serif' ,fontWeight:"bolder"}}>Name</TableCell>
              <TableCell style={{ fontFamily: 'serif',fontWeight:"bolder" }}>Type</TableCell>
              <TableCell style={{ fontFamily: 'serif',fontWeight:"bolder" }}>Status</TableCell>
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

      <div style={{ marginTop: '20px' }}>
        <TextField
          label="Serial Number"
          name="serialNumber"
          value={newAsset.serialNumber}
          onChange={handleInputChange}
          style={{ marginRight: '10px', marginTop: '10px' }}
        />
        <TextField
          label="Asset Name"
          name="name"
          value={newAsset.name}
          onChange={handleInputChange}
          style={{ marginRight: '10px', marginTop: '10px' }}
        />
        <TextField
          label="Type"
          name="type"
          value={newAsset.type}
          onChange={handleInputChange}
          style={{ marginRight: '10px', marginTop: '10px' }}
        />
        <TextField
          label="Status"
          name="status"
          value={newAsset.status}
          onChange={handleInputChange}
          style={{ marginRight: '10px', marginTop: '10px' }}
        />
        <br />
        <Button variant="contained" color="success" onClick={handleAddAsset} style={{ marginTop: '15px' }}>
          Add Asset
        </Button>
      </div>
    </>
  );
};

export default AssetTable;
