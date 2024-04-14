//components/VehicleUpdate.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicleById, updateVehicle } from '../api';

const VehicleUpdate = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        model: '',
        year: '',
        price: '',
        image: ''
    });

    useEffect(() => {
        const fetchVehicle = async () => {
            const data = await getVehicleById(id);
            setVehicle(data);
            setFormData({
                name: data.name,
                brand: data.brand,
                model: data.model,
                year: data.year,
                price: data.price,
                image: data.image
            });
        };
        fetchVehicle();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateVehicle(id, formData);
            alert('Vehicle updated successfully');
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    if (!vehicle) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Update Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
                <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
                <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image" value={formData.image} onChange={handleChange} required />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default VehicleUpdate;