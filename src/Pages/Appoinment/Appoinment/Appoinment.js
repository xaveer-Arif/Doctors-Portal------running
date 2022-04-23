import React from 'react';
import Nav from '../../Shared/Navigation/Nav';
import AppoinmentAvailable from '../AppoinmentAvailable/AppoinmentAvailable';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';

const Appoinment = () => {
    return (
        <div>
            <Nav/>
            <AppoinmentHeader/>
            <AppoinmentAvailable/>
        </div>
    );
};

export default Appoinment;