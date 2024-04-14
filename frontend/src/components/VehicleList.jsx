import React, { useEffect, useState } from 'react';
import { getAllVehicles } from '../api';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const data = await getAllVehicles();
            setVehicles(data);
        };
        fetchVehicles();
    }, []);

    return (
        <div>
            <h1>Vehicle List</h1>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>{vehicle.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;