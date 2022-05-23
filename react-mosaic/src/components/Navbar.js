import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const NavbarComponent = () => {
    return (
        <>
            <div className='container-fluid fontcolor navbar-sticky' style={{border: '1px solid blue', backgroundColor: 'white', zIndex: '2'}}>
                <div className='row text-center' style={{border: '1px solid green', padding: '20px'}}>
                <div className='col' style={{border: '1px solid yellow'}}>
                    
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='/home'>HOME</a>
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='/home'>PLATFORMS</a>
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                    <a className='navbar-links' href='/home'>CAREER</a>
                </div>

                <div className='col-1 my-auto' style={{border: '1px solid yellow', fontSize: 'small', margin: '5px'}}>
                        <a className='navbar-links' href='/home'>FELLOWSHIP</a>
                </div>

                <div className='col' style={{border: '1px solid yellow', fontSize: 'small'}}>
                <button className='light-font navbutton float-end'  style={{color: 'white', fontSize: 'small', paddingLeft:'20px', paddingRight: '20px', paddingTop: '15px', paddingBottom: '15px'}}>
                    C O N T A C T&nbsp;&nbsp;&nbsp;&nbsp;U S
                </button>
                </div>
    
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;