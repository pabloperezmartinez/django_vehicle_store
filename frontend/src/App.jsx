import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';
import VehicleForm from './components/VehicleForm';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Vehicle Store</h1>
                <Routes>
                    <Route exact path="/" element={<VehicleList />} />
                    <Route exact path="/vehicles/:id" element={<VehicleDetails />} />
                    <Route exact path="/create" element={<VehicleForm />} />
                    <Route exact path="/edit/:id" element={<VehicleForm />} />
                    <Route exact path="/delete/:id" element={<VehicleForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;