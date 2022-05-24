import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Navbar';
import ContactUsComponent from './ContactUs';
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

        <div id="platforms" className='container-fluid' style={{border: '1px solid blue', marginTop: '5vh'}}>
            <div className='row text-center' style={{border: '1px solid green', marginBottom: '4vh'}}>
                <div className='col' style={{fontSize: '5vh'}}>
                    Our Platforms
                </div>
            </div>

            <div className='row text-center justify-content-center' style={{border: '1px solid green'}}>
                <div className='col card shadow' style={{marginLeft: '10vw', marginRight: '0.5vw', border: '1px solid yellow', maxWidth: '400px', fontSize: '2.5vh'}}>
                        Digital Health Coach for Men
                        <br/>
                        <br/>
                        <p className='light-font'>Hair. Skin. Weight. Sleep.</p>
                        <p className='light-font'>If it matters to you, it matters to us</p>
                        
                        <a className='navbar-links manmatters-font-blue' href="manmatters.com">manmatters.com</a>
                </div>



                <div className='col card shadow' style={{marginRight: '10vw', marginLeft: '0.5vw', border: '1px solid yellow', maxWidth: '400px', fontSize: '2.5vh'}}>
                    Digital Health Coach for Women
                    <br/>
                    <br/>
                    <p className='light-font'>Bodywise is a wellness revolution designed to help you reclaim control over your health.</p>
                    <a className='navbar-links bodywise-font-yellow' href="bebodywise.com">bebodywise.com</a>
                
                
                </div>
            </div>
        </div>

        {/* our platforms ends */}

        <div id="values" className='container-fluid' style={{border: '1px solid blue', marginTop: '5vh'}}>
            <div className='row text-center' style={{border: '1px solid green', marginBottom: '4vh'}}>
                <div className='col' style={{fontSize: '5vh'}}>
                    Our Values
                </div>
            </div>

            <div className='row text-center justify-content-center' style={{border: '1px solid green'}}>
                <div className='col-2 card shadow my-auto' style={{border: '1px solid yellow', padding : '25px', marginRight: '1vw'}}>
                Authentic with all 
                <br/>
                stakeholders
                </div>

                <div className='col-2 card shadow my-auto' style={{border: '1px solid yellow', padding : '25px', marginRight: '1vw'}}>
                Bias for 
                <br/>
                action
                </div>

                <div className='col-2 card shadow my-auto' style={{border: '1px solid yellow', padding : '25px'}}>
                Passionate to do what 
                <br/>
                is best for the users
                </div>  
            </div>

            <div className='row text-center justify-content-center' style={{border: '1px solid green', marginTop: '2vh'}}>
            <div className='col-2 card shadow my-auto' style={{border: '1px solid yellow', padding : '25px', marginRight: '1vw'}}>
                Authentic with all 
                <br/>
                stakeholders
                </div>

                <div className='col-2 card shadow my-auto' style={{border: '1px solid yellow', padding : '25px', marginRight: '1vw'}}>
                Bias for 
                <br/>
                action
                </div>

                <div className='col-2 card shadow my-auto' style={{border: '1px solid yellow', padding : '25px'}}>
                Passionate to do what 
                <br/>
                is best for the users
                </div>
            </div>

        </div>
        
        {/* milestones start */}

        <div id="milestons" className='container-fluid' style={{marginTop: '7vh'}}>
            <div className='row text-center' style={{fontSize: '5vh'}}>
                <div className='col'>
                    Milestones
                </div>
            </div>
            
            <div className='row text-center'>
                <div className='col'>
                    <img src='https://uploads-ssl.webflow.com/625c1ce330600d5866988c42/625c6a4896cc1171bd88719f_Group%201773-p-1080.png' />
                </div>
            </div>
        </div>

        {/* milestones end */}

        <div id="careers" className='container-fluid' style={{marginTop: '5vh'}}>
            <div className='row text-center justify-content-center' style={{fontSize: '5vh'}}>
                <div className='col-7'>
                    Careers
                    <p className='light-font' style={{fontSize: '2.5vh'}}>
                    We're always on the lookout for people who share our passion to create.
We have open positions within brand design, tech and product design. If you feel the compelling need to build with independence and ownership, we'd love to hear from you.
                    </p>
                </div>
            </div>

            <div className='row text-center' style={{marginTop: '5vh'}}>
                <div className='col'>
                    <button className='btn btn-lg btn-block apply-btn input-shadow' style={{padding:'25px'}}>
                        Apply for open roles
                    </button>
                </div>
            </div>
        </div>

        {/* Careers end */}

        
        <ContactUsComponent />

        </>
    )
}

export default HomePageComponent;