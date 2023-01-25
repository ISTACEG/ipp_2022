import './event-card.scss'
import {useNavigate} from 'react-router-dom'






function EventCard(props) {

    let navigate = useNavigate();

    const eventCardClick = (e) => {
        navigate(`/details?eventid=${props.eventId}`)
    }


    return (
        <div onClick={eventCardClick} className="event-card">
            <img src={props.imgUrl} alt="" />

            <div className="info-grid">
                <div className="info-item">
                    <span>Name</span>
                    <span className='info-item-name'>{props.name}</span>
                </div>
                <div className="info-item">
                    <img src="Map Marker.svg" alt="" />
                    <span className="info-item-location">{props.location}</span>
                </div>
                <div className="info-item">
                    <span>Rounds</span>
                    <span className="info-item-round">{props.rounds}</span>
                </div>
                <div className="info-item">
                    <img src="Clock.svg" alt="" />
                    <span className='info-item-time'>{props.time}</span>
                </div>
                <div className="info-item event-type">
                    <span className='info-item-type'>{
                        
                        (props.type=="1")? <span>Tech Event</span>: <span>Non Tech Event</span>
                
                    }</span>
                </div>
                <div className="info-item">
                    <img src="Trophy.svg" alt="" />
                    <span className="info-item-prize">{props.prize}</span>
                </div>
            </div>

            <div className="edge-1"></div>
            <div className="edge-2"></div>
    
        </div>
    )
}




export default EventCard;