import React from 'react';

const FooterComponent = () =>{
    return(
        <>
            <div className='container-fluid' style={{marginTop: '5vh', border: '1px solid blue'}}>
                <div className='row text-center' style={{padding: '30px'}}>
                    <div className='col'>
                        <span style={{textDecoration: 'underline'}}>Office Locations</span>
                        <br/>
                        <span>Mumbai</span>
                        <br/>
                        <span>Bangalore</span>
                    </div>

                    <div className='col'>
                        <span style={{textDecoration: 'underline'}}>Contact Us</span>
                        <br/>
                        <span>info@mosaicwellness.in</span>
                        <br/>
                        <span>careers@mosaicwellness.in</span>
                    </div>

                    <div className='col'>
                        <span style={{textDecoration: 'underline'}}>Follow Us</span>
                        <br/>

                    </div>
                </div>
            </div>
        </>
    )
}


export default FooterComponent;

