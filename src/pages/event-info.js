import './event-info.scss'
import EventDetail from '../components/event-detail';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react';


function EventInfo(props) {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <>
            <Navbar />
            <div className="event-info">
                <div className='sections'>
                    <EventDetail imgUrl={props} />
                    <div className='a-bg-circle'></div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default EventInfo;