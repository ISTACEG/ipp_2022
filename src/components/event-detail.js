import './event-detail.scss'
import { eventListData } from '../resources/event-list-data'
import { useSearchParams } from 'react-router-dom';




function EventDetail() {

    const [searchParams] = useSearchParams()
    const eventId = searchParams.get('eventid')

    const eventData = eventListData[eventId];



    return (
        <div className="event-detail">

            <div className="wrapper">
                <div className="container-1">


                    <div className="text-info">
                        <h1 className='eventName'>{eventData.eventName}</h1>
                        <p className='eventDescription'>{eventData.eventDescription}</p>
                    </div> 

                    <div className="event-info-bg">
                        <div className="event-info-item">
                            <span className='h-span'>Location</span>
                            <span>Location of the event</span>
                        </div>
                        <div className="event-info-item">
                            <span className='h-span'>Time</span>
                            <span>00:00:00</span>
                        </div>
                        <div className="event-info-item">
                            <span className='h-span'>Rounds</span>
                            <span># of the Rounds</span>
                        </div>
                        <div className="event-info-item">
                            <span className='h-span'>Prizes</span>
                            <span>prizes</span>
                        </div>                
                    </div>
                </div>



                <div className="container-2">
                    <div className="img-bg">
                        <img className='eventposter' src={eventData.eventImgUrl} alt="" />
                    </div> 

                    <div className="event-contact">

                        <h2>Contacts</h2>

                        <div className="organizer-info-bg">
                            <div className="organizer-info-item">
                                <span className='h-span'>Organizer 1</span>
                                <span>1234567890</span>
                            </div>
                            <div className="organizer-info-item">
                                <span className='h-span'>Organizer 2</span>
                                <span>1234567890</span>
                            </div>
                            <div className="organizer-info-item">
                                <span className='h-span'>Organizer 3</span>
                                <span>1234567890</span>
                            </div>
                            <div className="organizer-info-item">
                                <span className='h-span'>Organizer 4</span>
                                <span>1234567890</span>
                            </div>                
                        </div>

                    </div>
                    
                </div>
            </div>



        </div>
    )
}


export default EventDetail;