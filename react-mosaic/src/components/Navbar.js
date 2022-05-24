import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const NavbarComponent = () => {
    return (
        <>
            <div className='container-fluid fontcolor navbar-sticky' style={{backgroundColor: 'white', zIndex: '2'}}>
                <div className='row text-center' style={{padding: '20px'}}>
                <div className='col' style={{border: '1px solid yellow'}}>
                    
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='/'>HOME</a>
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='#platforms'>PLATFORMS</a>
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='#careers'>CAREER</a>
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                        <a className='navbar-links' href='/fellowship'>FELLOWSHIP</a>
                </div>

                <div className='col' style={{border: '1px solid yellow', fontSize: 'small'}}>
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