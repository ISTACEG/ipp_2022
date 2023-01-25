
import './eventsPosterCard.scss'





function EventsPosterCard(props) {

    var eventType = '#tech_event'

    if (props.eventType == '1') {
        eventType = '#tech_event'
    }
    else {
        eventType = '#non_tech_event'
    }

    return (
        <div className="eventsPosterCard">
            <span className="header">{props.header}</span>
            <img src={props.imageUrl} alt="" />

            <div className="hashtag">
                {
                    
                    (props.eventType == '1')? (<span className='hash-tech'>#tech_event</span>):(<span className='hash-non-tech'>#non_tech_event</span>)
                                  
                }
            </div>

        </div>
    )
}




export default EventsPosterCard;