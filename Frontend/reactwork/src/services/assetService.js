import axios from "axios";


const API_URL = "http://localhost:5000/api/assets"; // Update with your backend URL if different

export const addAssets = async (AssetData) => {
  const response = await axios.post(`${API_URL}/addAssets`,AssetData);
  return response.data;
};

export const getAllAssets = async (AssetData) => {
  const response = await axios.post(`${API_URL}/getAllAssets`,AssetData);
  return response.data;
};
