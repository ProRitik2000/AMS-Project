// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';

// const AssetList = () => {
//   const [assets, setAssets] = useState([]);

//   const fetchAssets = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/assets');
//       setAssets(response.data);
//     } catch (error) {
//       console.error('Error fetching assets:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/assets/${id}`);
//       swal({
//         title: 'Success!',
//         text: 'Asset deleted successfully!',
//         icon: 'success',
//         buttons: 'OK',
//       }).then(() => fetchAssets()); // Refresh asset list after deletion
//     } catch (error) {
//       swal({
//         title: 'Error!',
//         text: 'Error deleting asset.',
//         icon: 'error',
//         buttons: 'OK',
//       });
//     }
//   };

//   useEffect(() => {
//     fetchAssets();
//   }, []);

//   return (
//     <div>
//       <h3>Asset List</h3>
//       <ul className="list-group">
//         {assets.map((asset) => (
//           <li key={asset._id} className="list-group-item">
//             <div>Name: {asset.name}</div>
//             <div>Type: {asset.type}</div>
//             <div>Serial Number: {asset.serialNumber}</div>
//             <div>Status: {asset.status}</div>
//             <button
//               onClick={() => handleDelete(asset._id)}
//               className="btn btn-danger btn-sm float-end"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AssetList;
