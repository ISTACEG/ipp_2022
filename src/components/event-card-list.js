import './event-card-list.scss'
import {eventListData} from '../resources/event-list-data'
import EventCard from './event-card'



function EventCardList() {
    return (
        <div className="Event-Card-List">
            {eventListData.map((eventItem, index) => (
                <EventCard eventId={index} imgUrl={eventItem.eventImgUrl} name={eventItem.eventName} type={eventItem.eventType} time={eventItem.time} location={eventItem.location} prize={eventItem.prize} rounds={eventItem.noRound} />
            ))}

        </div>
    )
}



export default EventCardList;