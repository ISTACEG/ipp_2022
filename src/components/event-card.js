import './event-card.scss'
import {useNavigate} from 'react-router-dom'






function EventCard(props) {

    let navigate = useNavigate();

    const eventCardClick = (e) => {

        if (props.type=="1") {
            navigate(`/details/${'e'}?id=${props.eventId}`)
        }
        else {
            navigate(`/details/${'nt'}?id=${props.eventId}`)
        }

    }


    return (
        <div onClick={eventCardClick} className="event-card">
            <img src={props.imgUrl} alt="" />


            {
                
                (props.isover) &&
                <div className="event-over">
                    Over
                </div>
            
            }


            <div className="info-grid">

                <h2 className='event-heading'>{props.name}</h2>
                <div><p>Prize</p> worth ₹{props.prize.winner + props.prize.runner}+</div>
                <p>{(props.type=="1")? <span>Tech Event</span>: <span>Non Tech Event</span>}</p>
                
            </div>

            <div className="edge-1"></div>
            <div className="edge-2"></div>
    
        </div>
    )
}




export default EventCard;