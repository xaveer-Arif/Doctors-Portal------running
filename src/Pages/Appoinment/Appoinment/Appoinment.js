import React from 'react';
import Nav from '../../Shared/Navigation/Nav';
import AppoinmentAvailable from '../AppoinmentAvailable/AppoinmentAvailable';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Nav/>
            <AppoinmentHeader date ={date} setDate={setDate}/>
            <AppoinmentAvailable date ={date}/>
        </div>
    );
};

export default Appoinment;