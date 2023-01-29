import './event-detail.scss'
import { eventListData, nontechEventsListData, workshopData, hackathonData } from '../resources/event-list-data'
import { useSearchParams, useParams } from 'react-router-dom';




function EventDetail() {

    const [searchParams] = useSearchParams()
    const eventId = searchParams.get('id')
    const { type } = useParams()

    const database = {
        e: eventListData,
        w: workshopData,
        h: hackathonData,
        nt: nontechEventsListData
    }

    const eventData = database[type][eventId];
    
    return (
        <div className="event-detail">
            <h1 className='eventName'>{eventData.eventName}</h1>

            <div className="wrapper">
                    



                <div className="container-1">

                    {
                        eventData.eventDescription.map((item, idx) => (
                            (item != null)?
                            <p className='eventDescription'>{item}</p>:
                            <span className='eventDescription' />
                        ))
                    }
                

                    
                </div>



                <div className="container-2">
                    

                    <div className="img-bg">
                        <img className='eventposter' src={"%PUBLIC_URL%/"+eventData.eventImgUrl} alt="" />
                    </div> 

                    {
                        (type=='h' || type=='w' || (type=='e' && eventId=='0')) &&
                            <a href={eventData.link}>
                                <button className="register">
                                    Register
                                </button>
                            </a>
                    }


                    
                    <div className="event-info-bg">
                        <div className="event-info-item">
                            <span className='h-span'>Location</span>
                            <span>{eventData.location}</span>
                        </div>
                        <div className="event-info-item">
                            <span className='h-span'>Date</span>
                            <span>{new Date(eventData.rounds[0].time).toLocaleString("en-US", { day : '2-digit'})}-{new Date(eventData.rounds[0].time).toLocaleString("en-US", { month: "short" })}-{new Date(eventData.rounds[0].time).getFullYear()}</span>
                        </div>
                        <div className="event-info-item">
                            <span className='h-span'>Time</span>
                            <span>{(new Date(eventData.rounds[0].time)).toLocaleString("en-US",{timeStyle: "short"})}</span>
                        </div>

                        {
                            (eventData.prize != null && eventData.prize.runner != null && eventData.prize.winner != null ) && 
                            <div className="event-info-item">
                                <span className='h-span'>Prize</span>
                                <div><span>Winner Rs.{eventData.prize.winner}</span> <span>Runner Rs.{eventData.prize.runner}</span> </div>
                            </div>  
                        }
                        <div className="event-info-item">
                            <span className='h-span'>Members</span>
                            <span>{eventData.member}</span>
                        </div>
                             
                                 
                    </div>
                    
                    <div className="event-contact">

                        <h2>Contacts</h2>

                        <div className="organizer-info-bg">

                            {
                                eventData.organiser.map((itm, idx) => (
                                    <div className="organizer-info-item">
                                        <span className='h-span'>{itm.name}</span>
                                        <span>{itm.number}</span>
                                    </div>
                                ))
                            }

                                           
                        </div>
                    </div>

                    {
                        (eventData.benefits != null && eventData.benefits.length > 0) &&
                        <div className="event-info-bg">
                            <div className="event-info-item">
                                <span className='h-span'>Benefits</span>
                                <span>{eventData.benefits}</span>
                            </div>             
                        </div>
                        
                    }

                </div>
            </div>



        </div>
    )
}


export default EventDetail;