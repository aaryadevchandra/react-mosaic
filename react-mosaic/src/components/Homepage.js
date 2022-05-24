import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Navbar';
import ContactUsComponent from './ContactUs';
import '../App.css'
import FooterComponent from './Footer';


const HomePageComponent = () =>{
    return (
        <>
        <NavbarComponent / >

        <div className='container-fluid' style={{backgroundColor: '#e8fbf1'}}>
                <div className='row' >
                    <div className='col-7 dark-green-font my-auto' style={{fontSize: '3vw', marginRight: '10vw', marginLeft: '1vw'}}>
                    Simplifying
                    <br/>
                    health solutions

                    <br/>
                    <span className='grey-font' style={{fontSize: '1.5vw'}}>With the help of cutting-edge technology</span>
                    <p className='grey-font' style={{fontSize: '1.5vw'}}>  & customer-first products</p>

                    </div>


                    <div className='col text-center'>
                    <img  src="https://uploads-ssl.webflow.com/625c1ce330600d5866988c42/625c1f8754629a7c7f7c2269_Frame%20(1)-p-500.png" style={{maxWidth: '100%', height: 'auto'}} />
                    </div>

                </div>
        </div>


        <div id="platforms" className='container' style={{marginBottom: '5vh'}}></div> {/*careers scrolling placeholder*/}
        <br></br>
        <br></br>
        <br></br>

        {/* our platforms starts */}

        <div className='container-fluid' style={{marginTop: '5vh'}}>
            <div className='row text-center' style={{marginBottom: '4vh'}}>
                <div className='col' style={{fontSize: '5vh'}}>
                    Our Platforms
                </div>
            </div>

            <div className='row text-center justify-content-center' >
                <div className='col card shadow' style={{marginLeft: '10vw', marginRight: '0.5vw', maxWidth: '400px', fontSize: '2.5vh'}}>
                        <img  src="https://uploads-ssl.webflow.com/625c1ce330600d5866988c42/625c2a23bc5a9d2f9933553f_Group%201668.png" style={{maxWidth: '45%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', marginBottom: '50px'}} />
                        Digital Health Coach for Men
                        <br/>
                        <br/>
                        <p className='light-font'>Hair. Skin. Weight. Sleep.</p>
                        <p className='light-font'>If it matters to you, it matters to us</p>
                        
                        <a className='navbar-links manmatters-font-blue' href="https://www.manmatters.com">manmatters.com</a>
                </div>



                <div className='col card shadow' style={{marginRight: '10vw', marginLeft: '0.5vw', maxWidth: '400px', fontSize: '2.5vh'}}>
                <img  src="https://uploads-ssl.webflow.com/625c1ce330600d5866988c42/625c2aaeb57ea371eceb9022_Group%201778.png" style={{maxWidth: '45%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', marginBottom: '50px'}} />
                    Digital Health Coach for Women
                    <br/>
                    <br/>
                    <p className='light-font'>Bodywise is a wellness revolution designed to help you reclaim control over your health.</p>
                    <a className='navbar-links bodywise-font-yellow' href="https://www.bebodywise.com">bebodywise.com</a>
                
                
                </div>
            </div>
        </div>

        {/* our platforms ends */}

        <div id="values" className='container-fluid' style={{marginTop: '20vh'}}>
            <div className='row text-center' style={{marginBottom: '4vh'}}>
                <div className='col' style={{fontSize: '5vh'}}>
                    Our Values
                </div>
            </div>

            <div className='row text-center justify-content-center'>
                <div className='col-2 card shadow my-auto' style={{padding : '25px', marginRight: '1vw'}}>
                Authentic with all 
                <br/>
                stakeholders
                </div>

                <div className='col-2 card shadow my-auto' style={{padding : '25px', marginRight: '1vw'}}>
                Bias for 
                <br/>
                action
                </div>

                <div className='col-2 card shadow my-auto' style={{padding : '25px'}}>
                Passionate to do what 
                <br/>
                is best for the users
                </div>  
            </div>

            <div className='row text-center justify-content-center' style={{marginTop: '2vh'}}>
            <div className='col-2 card shadow my-auto' style={{padding : '25px', marginRight: '1vw'}}>
                Authentic with all 
                <br/>
                stakeholders
                </div>

                <div className='col-2 card shadow my-auto' style={{padding : '25px', marginRight: '1vw'}}>
                Bias for 
                <br/>
                action
                </div>

                <div className='col-2 card shadow my-auto' style={{padding : '25px'}}>
                Passionate to do what 
                <br/>
                is best for the users
                </div>
            </div>

        </div>
        
        {/* milestones start */}

        <div id="milestones" className='container-fluid' style={{marginTop: '20vh'}}>
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
        <div id="careers" className='container' style={{marginBottom: '5vh'}}></div> {/*careers scrolling placeholder*/}
        <br></br>
        <br></br>
        <br></br>
        <div className='container-fluid' style={{marginTop: '5vh'}}>
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

        
        <div id="contactus" className='container' style={{marginBottom: '5vh'}}></div> {/*careers scrolling placeholder*/}
        <br></br>
        <br></br>
        <br></br>
        <ContactUsComponent />

        <FooterComponent />

        </>
    )
}

export default HomePageComponent;