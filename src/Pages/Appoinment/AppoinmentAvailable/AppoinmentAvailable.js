import React from 'react';

const AppoinmentAvailable = ({date}) => {
    return (
        <div>
            <h1>Availbabe Appointments on {date.toDateString()} </h1>
        </div>
    );
};

export default AppoinmentAvailable;