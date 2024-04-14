import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicleById } from '../api';

const VehicleDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const data = await getVehicleById(id);
                setVehicle(data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching vehicle details. Please try again later.');
                setLoading(false);
            }
        };
        fetchVehicle();
    }, [id]);

    return (
        <div>
            <h2>Vehicle Details</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {vehicle && (
                <div>
                    <p>Name: {vehicle.name}</p>
                    <p>Brand: {vehicle.brand}</p>
                    <p>Model: {vehicle.model}</p>
                    <p>Year: {vehicle.year}</p>
                    <p>Price: {vehicle.price}</p>
                    <img src={vehicle.image} alt={vehicle.name} />
                </div>
            )}
        </div>
    );
};

export default VehicleDetails;