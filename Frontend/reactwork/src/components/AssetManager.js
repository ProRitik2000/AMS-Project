// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';

// function AssetManager() {
//   const [assets, setAssets] = useState([]);
//   const [newAsset, setNewAsset] = useState({ name: '', type: '', serialNumber: '', quantity: '', purchaseDate: '', status: 'Active' });
//   const [editingAsset, setEditingAsset] = useState(null);

//   useEffect(() => {
//     fetchAssets();
//   }, []);

//   const fetchAssets = async () => {
//     try {
//       const response = await axios.get('/api/assets');
//       setAssets(response.data.assets);
//     } catch (error) {
//       console.error('Error fetching assets:', error);
//     }
//   };

//   const handleAddAsset = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/assets', newAsset);
//       swal('Success!', 'Asset added successfully!', 'success');
//       setNewAsset({ name: '', type: '', serialNumber: '', quantity: '', purchaseDate: '', status: 'Active' });
//       fetchAssets();
//     } catch (error) {
//       swal('Error!', 'Error adding asset.', 'error');
//     }
//   };

//   const handleEditAsset = async (id) => {
//     try {
//       const response = await axios.get(`/api/assets/${id}`);
//       setEditingAsset(response.data.asset);
//     } catch (error) {
//       swal('Error!', 'Error fetching asset details.', 'error');
//     }
//   };

//   const handleUpdateAsset = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/api/assets/${editingAsset._id}`, editingAsset);
//       swal('Success!', 'Asset updated successfully!', 'success');
//       setEditingAsset(null);
//       fetchAssets();
//     } catch (error) {
//       swal('Error!', 'Error updating asset.', 'error');
//     }
//   };

//   const handleDeleteAsset = async (id) => {
//     try {
//       await axios.delete(`/api/assets/${id}`);
//       swal('Success!', 'Asset deleted successfully!', 'success');
//       fetchAssets();
//     } catch (error) {
//       swal('Error!', 'Error deleting asset.', 'error');
//     }
//   };

//   return (
//     <div>
//       <h2>Asset Manager</h2>
//       <form onSubmit={editingAsset ? handleUpdateAsset : handleAddAsset}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={editingAsset ? editingAsset.name : newAsset.name}
//           onChange={(e) => editingAsset ? setEditingAsset({ ...editingAsset, name: e.target.value }) : setNewAsset({ ...newAsset, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Type"
//           value={editingAsset ? editingAsset.type : newAsset.type}
//           onChange={(e) => editingAsset ? setEditingAsset({ ...editingAsset, type: e.target.value }) : setNewAsset({ ...newAsset, type: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Serial Number"
//           value={editingAsset ? editingAsset.serialNumber : newAsset.serialNumber}
//           onChange={(e) => editingAsset ? setEditingAsset({ ...editingAsset, serialNumber: e.target.value }) : setNewAsset({ ...newAsset, serialNumber: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={editingAsset ? editingAsset.quantity : newAsset.quantity}
//           onChange={(e) => editingAsset ? setEditingAsset({ ...editingAsset, quantity: e.target.value }) : setNewAsset({ ...newAsset, quantity: e.target.value })}
//         />
//         <input
//           type="date"
//           placeholder="Purchase Date"
//           value={editingAsset ? editingAsset.purchaseDate : newAsset.purchaseDate}
//           onChange={(e) => editingAsset ? setEditingAsset({ ...editingAsset, purchaseDate: e.target.value }) : setNewAsset({ ...newAsset, purchaseDate: e.target.value })}
//         />
//         <select
//           value={editingAsset ? editingAsset.status : newAsset.status}
//           onChange={(e) => editingAsset ? setEditingAsset({ ...editingAsset, status: e.target.value }) : setNewAsset({ ...newAsset, status: e.target.value })}
//         >
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//           <option value="Maintenance">Maintenance</option>
//         </select>
//         <button type="submit">{editingAsset ? 'Update Asset' : 'Add Asset'}</button>
//       </form>

//       <ul>
//         {assets.map((asset) => (
//           <li key={asset._id}>
//             {asset.name} - {asset.type} - {asset.serialNumber} - {asset.quantity} - {asset.purchaseDate} - {asset.status}
//             <button onClick={() => handleEditAsset(asset._id)}>Edit</button>
//             <button onClick={() => handleDeleteAsset(asset._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AssetManager;
