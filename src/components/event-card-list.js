import './event-card-list.scss'
import { eventListData , nontechEventsListData , workshopData , hackathonData } from '../resources/event-list-data'
import EventCard from './event-card'
import {useNavigate} from 'react-router-dom'



function EventCardList() {

    let navigate = useNavigate();

    const workshopCardClick = (e) => {
        navigate(`/details/${'w'}?id=${'0'}`)
    }
    
    const hackathonCardClick = (e) => {
        navigate(`/details/${'h'}?id=${'0'}`)
    }




    return (
        <div className="Event-card-list-wrapper">

            <h1>Workshop</h1>

            <div className="workshop-container" onClick={workshopCardClick}>
                {workshopData.map((item, index) => (

                    

                    <div className="workshop-card">
                        <img src={item.eventImgUrl} alt="" />

                        {
                            
                            ((new Date(item.date).toLocaleString("en-US", {dateStyle: 'short'}) < new Date().toLocaleString("en-US", {dateStyle: 'short'}))) &&

                            <div className="event-over">
                                Over
                            </div>
                        
                        }

                        <div className="info-grid">

                            <h2 className='event-heading'>{item.eventName}</h2>
                            <div><p>Date: </p>{new Date(item.date).toLocaleString("en-US", { day : '2-digit'})}-{new Date(item.date).toLocaleString("en-US", { month: "short" })}-{new Date(item.date).getFullYear()}</div>
                            <div><p>Time: </p>{new Date(item.rounds[0].time).toLocaleString("en-US", {timeStyle: "short"})}</div>
                            <div><p>Location: </p>{item.location}</div>
                            
                                
                            <button className="register">AWS Workshop Register</button>

                        </div>

                        <div className="edge-1"></div>
                        <div className="edge-2"></div>
                    </div>

                ))}
                
            </div>





            <h1>Hackathon</h1>

            <div className="hackathon-container">
                <div className="workshop-container" onClick={hackathonCardClick}>
                    {hackathonData.map((item, index) => (

                        <div className="workshop-card">
                            <img src={item.eventImgUrl} alt="" />

                            {
                            
                                ((new Date(item.date).toLocaleString("en-US", {dateStyle: 'short'}) < new Date().toLocaleString("en-US", {dateStyle: 'short'}))) &&

                                <div className="event-over">
                                    Over
                                </div>
                            
                            }

                            <div className="info-grid">

                                <h2 className='event-heading'>{item.eventName}</h2>
                                <div><p>Date: </p>{new Date(item.date).toLocaleString("en-US", { day : '2-digit'})}-{new Date(item.date).toLocaleString("en-US", { month: "short" })}-{new Date(item.date).getFullYear()}</div>
                                <div><p>Time: </p>{new Date(item.rounds[0].time).toLocaleString("en-US", {timeStyle: "short"})}</div>
                                <div><p>Location: </p>{item.location}</div>
                                
                                    
                                <button className="register">Hackathon Register</button>

                            </div>

                            <div className="edge-1"></div>
                            <div className="edge-2"></div>
                        </div>

                    ))}
                    
                </div>

            </div>

            <h1>Events</h1>

            <div className="Event-Card-List">
                
                {eventListData.map((eventItem, index) => {
                    var isOver = false;
                        
                    if ((new Date(eventItem.date).toLocaleString("en-US", {dateStyle: 'short'}) < new Date().toLocaleString("en-US", {dateStyle: 'short'}))) {
                        isOver = true
                    }                
                
                    return(
                        <EventCard eventId={index} imgUrl={eventItem.eventImgUrl} name={eventItem.eventName} type={eventItem.eventType} time={eventItem.time} location={eventItem.location} prize={eventItem.prize} rounds={eventItem.noRound}  isover={isOver}/>
                    )
                })}

            </div>

            <div className="Event-Card-List">
                
                {nontechEventsListData.map((eventItem, index) => {
                    var isOver = false;
                      
                    if ((new Date(eventItem.date).toLocaleString("en-US", {dateStyle: 'short'}) < new Date().toLocaleString("en-US", {dateStyle: 'short'}))) {
                        isOver = true
                    }

                    return (    
                        <EventCard eventId={index} imgUrl={eventItem.eventImgUrl} name={eventItem.eventName} type={eventItem.eventType} time={eventItem.time} location={eventItem.location} prize={eventItem.prize} rounds={eventItem.noRound} isover={isOver} />
                    )
                })}

            </div>

        </div>
        
    )
}



export default EventCardList;