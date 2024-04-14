import React, { useState } from 'react';
import { createVehicle } from '../api';

const VehicleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        model: '',
        year: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createVehicle(formData);
            alert('Vehicle created successfully');
            // Reset form after successful submission
            setFormData({
                name: '',
                brand: '',
                model: '',
                year: '',
                price: '',
                image: ''
            });
        } catch (error) {
            console.error('Error creating vehicle:', error);
        }
    };

    return (
        <div>
            <h2>Create Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
                <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
                <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default VehicleForm;