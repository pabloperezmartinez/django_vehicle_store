//src/api.jsx
import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000/api/vehicles/';

export const getAllVehicles = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
};

export const getVehicleById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        throw error;
    }
}

export const createVehicle = async (vehicleData) => {
    try {
        const response = await axios.post(API_URL, vehicleData,  {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating vehicle:', error);
        throw error;
    }
};

export const updateVehicle = async (id, vehicleData) => {
    try {
        const response = await axios.put(`${API_URL}${id}/`, vehicleData);
        return response.data;
    } catch (error) {
        console.error('Error updating vehicle:', error);
        throw error;
    }
};

export const partialUpdateVehicle = async (id, vehicleData) => {
    try {
        const response = await axios.patch(`${API_URL}${id}/`, vehicleData);
        return response.data;
    } catch (error) {
        console.error('Error partially updating vehicle:', error);
        throw error;
    }
};

export const deleteVehicle = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        throw error;
    }
};