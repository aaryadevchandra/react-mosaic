import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const NavbarComponent = () => {
    return (
        <>
            <div className='container-fluid fontcolor navbar-sticky' style={{backgroundColor: 'white', zIndex: '2'}}>
                <div className='row text-center' style={{padding: '20px'}}>
                <div className='col my-auto' >
                    <img src="https://uploads-ssl.webflow.com/625c1ce330600d5866988c42/625c1d3c77e2fea94f68e598_logo_4x%201-p-500.png" style={{maxWidth: '35%', height: 'auto', float: 'left'}} />
                </div>

                <div className='col-1 my-auto' style={{ fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='/'>HOME</a>
                </div>

                <div className='col-1 my-auto' style={{ fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='#platforms'>PLATFORMS</a>
                </div>

                <div className='col-1 my-auto' style={{ fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='#careers'>CAREER</a>
                </div>

                <div className='col-1 my-auto' style={{ fontSize: 'small', margin: '5px'}}>
                        <a className='navbar-links' href='/fellowship'>FELLOWSHIP</a>
                </div>

                <div className='col' style={{ fontSize: 'small'}}>
                <a href="#contactus"><button className='light-font navbutton float-end'  style={{color: 'white', fontSize: 'small', paddingLeft:'20px', paddingRight: '20px', paddingTop: '15px', paddingBottom: '15px'}}>
                    C O N T A C T&nbsp;&nbsp;&nbsp;&nbsp;U S
                </button></a>
                </div>
    
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;