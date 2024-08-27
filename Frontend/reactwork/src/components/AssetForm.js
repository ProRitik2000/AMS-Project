import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AssetForm = ({ onAssetAdded }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [status, setStatus] = useState('');
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleDropdownChange = (e) => {
    if (e.target.value === "Add New Asset") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !type || !serialNumber || !status) {
      swal({
        title: 'Error!',
        text: 'All fields are required.',
        icon: 'warning',
        buttons: 'OK',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/assets', {
        name,
        type,
        serialNumber,
        status,
      });

      if (response.data) {
        swal({
          title: 'Success!',
          text: 'Asset added successfully!',
          icon: 'success',
          buttons: 'OK',
        }).then(() => {
          setName('');
          setType('');
          setSerialNumber('');
          setStatus('');
          onAssetAdded(); // Notify parent component to refresh the asset list
        });
      }
    } catch (error) {
      swal({
        title: 'Error!',
        text: 'Error adding asset.',
        icon: 'error',
        buttons: 'OK',
      });
    }
  };

  return (
   <>
    <div className="mb-3">
    <select className="form-control" onChange={handleDropdownChange}>
      <option value="">Select an option</option>
      <option value="addNew">Add new Asset</option>
      {/* Other options can go here */}
    </select>
  </div>

  {showForm && (
    <form onSubmit={handleSubmit}>
      <h3>Add New Asset</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Asset Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Asset Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Serial Number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-warning">Add Asset</button>
    </form>
  )}
  </>
);
};

export default AssetForm;
