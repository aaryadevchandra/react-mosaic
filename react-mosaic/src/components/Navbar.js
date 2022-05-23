import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const NavbarComponent = () => {
    return (
        <>
            <div className='container-fluid navfont-color' style={{border: '1px solid blue'}}>
                <div className='row' style={{border: '1px solid green'}}>
                <div className='col' style={{border: '1px solid yellow'}}>

                </div>

                <div className='col' style={{border: '1px solid yellow', padding: '10px'}}>
                    HOME
                </div>

                <div className='col' style={{border: '1px solid yellow', padding: '10px'}}>
                    PLATFORMS
                </div>

                <div className='col' style={{border: '1px solid yellow', padding: '10px'}}>
                    CAREERS
                </div>

                <div className='col' style={{border: '1px solid yellow', padding: '10px'}}>
                        FELLOWSHIP
                </div>

                <div className='col' style={{border: '1px solid yellow', padding: '10px'}}>
                    CONTACT US 
                </div>
    
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;