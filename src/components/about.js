import './about.scss'

import { useEffect, useRef, useState } from 'react'





function About() {

    
    const [offset, setOffset] = useState(0);

    var  about_text_h_div_ref = useRef(null);
    var  about_text_pbg_div_ref = useRef(null);
    var  about_div_ref = useRef();



    useEffect(() => {

        // window.addEventListener('scroll', () => {
        //     setOffset(window.scrollY)
        // });
    
        // // var slideIn = (offset + window.innerHeight) - about_text_h_div_ref.current.clientHeight;
        // // var ishalfshown = slideIn > about_text_h_div_ref.current.offsetTop 

        // // console.log(offset, about_div_ref.current.scrollHeight, about_div_ref.current.clientHeight)


        // if (offset > about_div_ref.current.getBoundingClientRect().top) {
        //     about_text_h_div_ref.current.style.transform = "translateX(0)"
        //     about_text_pbg_div_ref.current.style.transform = "translateX(0)"
        // } 


        
    })








    return (
        <div className="about-div" ref={about_div_ref}>
            <div className="about-wrapper">
                <img src={process.env.PUBLIC_URL + "/about_bg.jpg"} alt="" className="about-poster" />

                <div className="about-text-div">
                    <h1 ref={about_text_h_div_ref}>About us</h1>
                    <div className="about-text-bg" ref={about_text_pbg_div_ref}>
                        <p>Under the Department of Information Science and Technology, we, at ISTA, are a staff-student run body striving to work hard for the betterment of our department, host various technical symposiums and represent our department in various activities. We also aim at guiding students across all years with a variety of matters, for a better tomorrow. I++ Held every year in the month of December, I++ is the intra-department symposium held by ISTA, on behalf of the Department of Information Science and Technology. With a footfall of about 800 odd students every year, we strive hard to do our part in bringing together the student community of not just our department, but the entire community at the College of Engineering, Guindy.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}



export default About;