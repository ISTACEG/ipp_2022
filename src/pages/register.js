import './register.scss'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect } from 'react';


function Register() {


    useEffect(() => {
        window.scrollTo(0,0)
    })


    return (
        <>
            <Navbar />
            <div className="register">
                <div className="sections">
                    <h1>I++ Register</h1>

                    <div className="register-form">
                        <form action="" method="post">

                            <div className="row-1">
                                <div className="input-div">
                                    <input type="text" name="user-name" placeholder='Name'/>
                                    <label htmlFor="user-name">Name</label>
                                </div>
                                <div className="input-div">
                                    <input type="text" name="rollno" placeholder='Roll Number'/>
                                    <label htmlFor="rollno">Roll Number</label>
                                </div>
                            </div>

                            <div className="row-2">
                                <div className="input-div">
                                    <input type="text" name="dept" placeholder='Department'/>
                                    <label htmlFor="dept">Department</label>
                                </div>
                                <div className="input-div">
                                    <input type="number" name="year" placeholder='Year'/>
                                    <label htmlFor="year">Year</label>
                                </div>
                            </div>
                            <div className="row-3">
                                <div className="input-div">
                                    <input type="email" name="email" placeholder='Email' />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row-4">
                                <div className="input-div">
                                    <input type="text" name="phone-number-1" placeholder='Contact Number 1' />
                                    <label htmlFor="phone-number-1">Contact Number 1</label>
                                </div>
                                <div className="input-div">
                                    <input type="text" name="phone-number-2" placeholder='Contact Number 2' />
                                    <label htmlFor="phone-number-2">Contact Number 2</label>
                                </div>
                            </div>
                            <div className="row-5">
                                <input type="submit" value="Submit" />
                            </div>

                        </form>
                    </div>





                    <div className='a-bg-circle'></div>
                    <div className='b-bg-circle'></div>
                    {/* <div className='c-bg-circle'></div>
                    <div className='d-bg-circle'></div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}



export default Register;