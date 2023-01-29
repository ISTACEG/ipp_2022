import React from 'react';
import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import _ from "lodash";
import styled from 'styled-components'
import './sponsorCaraousal.scss'
import colorVariables from '../UTILS/color.scss'
import {sponsorsList} from '../resources/event-list-data'


const SponsorCaraousal = (props) => {

    const elemRef = useRef();


    const mousenterfunc = (e) => {
        elemRef.current.style.animationPlayState = 'paused';
    }
    
    const mouseleavefunc = (e) => {
        elemRef.current.style.animationPlayState = 'running';
    }

    
    






    return (

        <div className='sponsorCaraousal-container'>

            <div className='container' ref={elemRef} onMouseEnter={mousenterfunc} onMouseLeave={mouseleavefunc}>

                <div className='LeftEndDiv' />

                <div className='SponsorCarousel'>

                    {_.times(2, (i) => (
                        <div className='ImgList' key={i}>
                            {sponsorsList.map((sponsor, index) => {
                                return (
                                    <div className="sponsor-img-wrapper">
                                        <img className='ImgListItem' src={sponsor.sponsorLogo} alt={sponsor.sponsorName+" logo"} />
                                        <h3>{sponsor.type}</h3>
                                    </div>
                                )
                            })}

                        </div>
                    ))}
                </div>

                
                <div className='RightEndDiv' />
            </div>

        </div>
    );
}

export default SponsorCaraousal;