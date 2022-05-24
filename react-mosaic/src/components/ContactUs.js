import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const ContactUsComponent = ()=> {

    const sendMail = () => {
        alert('hey! This feature has not been setup yet : D Please try again later')
    }

    return (
        <>
            <div className='container-fluid' style={{marginTop: '5vh'}}>
            <div className='row justify-content-center'>
                <div className='col-7 card input-shadow' style={{fontSize: '5vh'}}>
                    <p className='text-center'>Say hello!</p>
                    <p className='light-font text-center' style={{fontSize: '2.5vh'}}>Write to us & we will get back to you.</p>


                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div className='col light-font' style={{fontSize: '2vh'}}>
                            NAME
                        </div>
                    </div>

                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div  className='form-group'>
                            <input className='form-control shadow-none'></input>
                        </div>
                    </div>

                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div className='col light-font' style={{fontSize: '2vh', marginTop: '2.5vh'}}>
                            EMAIL ADDRESS
                        </div>
                    </div>

                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div  className='form-group'>
                            <input className='form-control shadow-none'></input>
                        </div>
                    </div>


                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div className='col light-font' style={{fontSize: '2vh', marginTop: '2.5vh'}}>
                            PHONE
                        </div>
                    </div>

                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div  className='form-group'>
                            <input className='form-control shadow-none'></input>
                        </div>
                    </div>


                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div className='col light-font' style={{fontSize: '2vh', marginTop: '2.5vh'}}>
                            YOUR MESSAGE
                        </div>
                    </div>

                    <div className='row' style={{marginLeft: '1vw', marginRight: '1vw'}}>
                        <div  className='form-group'>
                            <input className='form-control shadow-none'></input>
                        </div>
                    </div>


                    <div className='row text-center' style={{marginTop: '5vh', marginBottom: '2vh'}}>
                        <div className='col'>
                        <button className='btn btn-lg btn-block apply-btn input-shadow' style={{paddingRight:'10vw', paddingLeft: '10vw'}} onClick={sendMail}>
                            Submit
                        </button>
                        </div>
                    </div>

               
                </div>
            </div>
        </div>

        </>
    )

}

export default ContactUsComponent;
