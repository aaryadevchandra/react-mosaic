import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Navbar';
const HomePageComponent = () =>{
    return (
        <>
        <NavbarComponent / >

        <div className='container-fluid' style={{border: '1px solid blue'}}>
            <div className='container-fluid' style={{border: '1px solid blue', marginTop: '15vh', marginBottom: '15vh', marginLeft: '2vw'}}>
                <div className='row' style={{border: '1px solid green'}}>
                    <div className='col dark-green-font' style={{border: '1px solid yellow', fontSize: '3vw'}}>
                    Simplifying
                    <br/>
                    health solutions

                    </div>
                </div>


                <div className='row' style={{border: '1px solid green', marginTop: '1vh'}}>
                    <div className=' grey-font' style={{border: '1px solid yellow', fontSize: '1.5vw'}}>
                        With the help of cutting-edge technology
                        <br/>
                        & customer-first products
                    </div>
                </div>
            </div>
        </div>

        {/* our platforms starts */}

        <div className='container-fluid' style={{border: '1px solid blue'}}>
            <div className='row text-center' style={{border: '1px solid green'}}>
                <div className='col' style={{fontSize: '5vh'}}>
                    Our Platforms
                </div>
            </div>

            <div className='row text-center' style={{border: '1px solid green'}}>
                <div className='col card shadow' style={{marginLeft: '10vw', marginRight: '0.5vw', border: '1px solid yellow', maxWidth: '400px'}}>
                        Digital Health Coach for Men
                        <br/>
                        <br/>
                        <p className='light-font'>Hair. Skin. Weight. Sleep.</p>
                        <p className='light-font'>If it matters to you, it matters to us</p>
                        
                        <div className='row'>
                        <p>
                            <a className='navbar-links manmatters-font-blue' href="manmatters.com">manmatters.com</a>
                        </p>
                        </div>
                </div>



                <div className='col card shadow' style={{marginRight: '10vw', marginLeft: '0.5vw', border: '1px solid yellow', maxWidth: '400px'}}>
                    Digital Health Coach for Women
                    <br/>
                    <br/>
                    <p className='light-font'>Bodywise is a wellness revolution designed to help you reclaim control over your health.</p>
                    <div className='row'>
                        <p>
                            <a className='navbar-links bodywise-font-yellow' href="bebodywise.com">bebodywise.com</a>
                        </p>
                    </div>
                
                
                </div>
            </div>
        </div>

        </>
    )
}

export default HomePageComponent;