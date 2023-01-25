import { Link } from 'react-router-dom'
import EventList from '../pages/event-list';
import Home from '../pages/home-page';
import { useEffect, useRef,useState, forwardRef } from 'react';

import './navbar.scss'
import variables from '../UTILS/color.scss'


import styled from 'styled-components'



const Navbar = forwardRef((props, ref) => { 

    const [offset, setOffset] = useState(0);
    var tmp = ((Math.min(14, Math.floor(offset/30))/15) * 255)




    useEffect(() => {


        window.addEventListener('scroll', () => {
            // console.log(offset)
            setOffset(window.scrollY)
        });
    

    }, [offset])



    
    return (
        <nav className="navbar" ref={ref} style={{backgroundColor: (tmp==0)?'transparent':variables.black+tmp.toString(16)}}>

            <div className='nav-container'>

                <div className="nav-logo">ISTA</div>
                
                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
                <Link to='/#about'>About</Link>
                <Link to='/register' className='reg-link'>
                    <div>Register</div>
                </Link>



                {/* <div onClick={} className='nav-item'>Home</div>
                <div onClick={} className='nav-item'>Events</div>
                <div onClick={} className='nav-item'>About</div>
                <div onClick={} className='nav-item'>
                    <div>Register</div>
                </div> */}

            </div>

        </nav>
    )
})



export default Navbar;