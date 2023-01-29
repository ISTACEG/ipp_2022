import './event-list.scss'
import EventCardList from '../components/event-card-list'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react'



function EventList() {

    useEffect(() => {
        window.scrollTo(0,0)
    })


    return (
        <>
            <Navbar />
            <div className="event-List">
                
                <div className='sections'>
                    
                    <EventCardList />
                    <div className='a-bg-circle'></div>
                    <div className='b-bg-circle'></div>
                    <div className='c-bg-circle'></div>
                    <div className='d-bg-circle'></div>
                </div>
            </div>
            <Footer />
        </>
    )
}



export default EventList;