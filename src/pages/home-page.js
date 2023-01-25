
import Welcome from '../components/welcome'
import EventsBanner from '../components/eventsBanner'
import About from '../components/about'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home-page.scss'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'



function Home() {
    let location = useLocation();

    var aboutSectionRef = useRef();

    useEffect(() => {


        
        if (location.hash == '#about') {
            aboutSectionRef.current.scrollIntoView()
        }
        else {
            window.scrollTo(0,0)
        }
    

    }, [location])
    


    
    return (
        <>
            <Navbar/>
            <div className='home'>
                <div className='sections'>
                    <Welcome />
                    <div className='welcome-bg-circle'></div>
                </div>
                
                <div className='sections'>
                    <EventsBanner />
                    <div className='events-bg-circle'></div>
                </div>
                <div className='sections' ref={aboutSectionRef}>
                    <About />
                    <div className='about-bg-circle'></div>
                </div>
            </div>
            <Footer />
        </>
    )
}



export default Home;