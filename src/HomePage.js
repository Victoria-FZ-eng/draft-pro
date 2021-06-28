import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import axios from 'axios';
import Slider from './Slider.js';

class Home extends React.Component{

   

    render(){
        return(
            <>
            <h1>Hello In Home Page</h1>
            
            <Slider />
            </>
        )
    }
}

export default withAuth0(Home);