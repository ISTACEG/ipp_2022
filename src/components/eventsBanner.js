import './eventsBanner.scss'

import EventsPosterCard from './eventsPosterCard'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import {eventListData, workshopData, hackathonData, nontechEventsListData} from '../resources/event-list-data'
import { useNavigate } from "react-router-dom";


function EventsBanner() {

    const [offset, setOffset] = useState(0);

    var event_div_ref = useRef();
    var event_text_h_div_ref = useRef(null);
    var event_text_pbg_div_ref = useRef(null);
    const navigate = useNavigate()


    var eventList = []

    if (eventList.length < 12) {
        eventList.push(...eventListData)
        eventList.push(...workshopData)
        eventList.push(...nontechEventsListData)
        eventList.push(...hackathonData)
        eventList.push(eventList[0])
    }


    useEffect(() => {

        // window.addEventListener('scroll', () => {
        //     setOffset(window.scrollY)
        // });
    
    

        // if (offset >event_div_ref.current.getBoundingClientRect().top) {
        //     event_text_h_div_ref.current.style.transform = "translateX(0)"
        //     event_text_pbg_div_ref.current.style.transform = "translateX(0)"
        // } 

        

        



    })
    







    var numList=3;

    var lenDiv = Math.ceil(eventList.length/numList)


    const event_div_ref_click = () => {
        navigate("/events");
    }
    

    return (
        <div className="eventsBanner-div" ref={event_div_ref} onClick={event_div_ref_click}>

            <div className="eventsBanner-container">


                <div className="events-text-div">
                    <h1 ref={event_text_h_div_ref}>Events</h1>

                    <div className="text-background-div" ref={event_text_pbg_div_ref}>
                        <p>Participate in Amazing Events and win exciting Cash prizes. I++ hosts the most enthusiastic Technical events as well as fun filled Non-Technical events</p>

                        <span>Click for more details...</span>
                    </div>
                </div>



                <div className="events-banner-poster">
                    <div className="top-end"></div>

                    {
                                        
                        _.times(numList, (i) => (
                            <div className={'EventsPosterCard-list-'+i.toString()}>
                                
                                {_.times(2, (j) => (

                                    <div className={'EventsPosterCard-list-section-'+j}>

                                    {eventList.slice(lenDiv*i, (i+1)*lenDiv).map((event, index) => {
                                        return (
                                            <EventsPosterCard header={event.eventName} imageUrl={event.eventImgUrl} eventType={event.eventType} />
                                        )
                                    })}


                                    </div>
                                ))}

                            </div>
                        ))


                    }
                                    



                    <div className="bottom-end"></div>

                </div>
            </div>
            

        
        </div>
    )
}




export default EventsBanner; 