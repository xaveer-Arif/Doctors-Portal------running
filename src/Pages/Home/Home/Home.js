import React from 'react';

import Services from '../../Services/Services';
import Nav from '../../Shared/Navigation/Nav';

const Home = () => {
    return (
        <div>
            {/* <h1>This is home</h1> */}
            <Nav></Nav>
            <Services></Services>
            
        </div>
    );
};

export default Home;