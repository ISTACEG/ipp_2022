
import './eventsPosterCard.scss'





function EventsPosterCard(props) {

    return (
        <div className="eventsPosterCard">
            <span className="header">{props.header}</span>
            <img src={props.imageUrl} alt="" />

            <div className="hashtag">
                {
                    {
                        1: <span className='hash-tech'>#tech_event</span>,
                        2: <span className='hash-non-tech'>#non_tech_event</span>,
                        3: <span className='hash-non-tech'>#hackathon</span>,
                        4: <span className='hash-non-tech'>#workshop</span>
                    }[props.eventType]
                                            
                }
            </div>

        </div>
    )
}




export default EventsPosterCard;