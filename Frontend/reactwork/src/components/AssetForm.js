import React, { useState } from 'react';
import { addAssets } from '../services/assetService.js';
import swal from 'sweetalert';

const AssetForm = () => {
    const [asset, setAsset] = useState({serialNumber: '', name: '', type: '', status: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAsset({ ...asset, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addAssets(asset);
            if (response.data.success) {
                swal('Success', 'Asset added successfully', 'success');
                setAsset({ serialNumber: '',name: '', type: '', status: '' });
            }
        } catch (error) {
            swal('Error', 'Failed to add asset', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={asset.name} onChange={handleInputChange} placeholder="Asset Name" />
            <input name="serialNumber" value={asset.serialNumber} onChange={handleInputChange} placeholder="Serial Number" />
            <input name="type" value={asset.type} onChange={handleInputChange} placeholder="Type" />
            <input name="status" value={asset.status} onChange={handleInputChange} placeholder="Status" />
            <button type="submit">Add Asset</button>
        </form>
    );
};

export default AssetForm;
