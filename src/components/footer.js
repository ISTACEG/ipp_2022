
import '../components/footer.scss'



function Footer() {
    return (
        <>
            <footer>
                <div className="footer-div">

                    <div className="social-div">
                        <img src={process.env.PUBLIC_URL+"/ISTA_logo.png"} className='ista-logo' alt="" />

                        <div className='social-handles'>
                            <a href="https://www.instagram.com/ista__ceg/" target="_blank">
                                <img src="../Instagram-icon.svg" alt="" />
                            </a>
                            <a href="mailto:auista.council@gmail.com" target="_blank">
                                <img src="../email-icon.svg" class="email-logo" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/ista-ceg/mycompany/" target="_blank">
                                <img src="../linkedin-icon.svg" alt="" />
                            </a>
                        </div>
                    </div>


                    <div className='contact-div'>
                        <span className='contact-title'>Contact</span>
                        
                        <div className='contact-person-div-row'>
                            <div className='contact-person-div'>
                                <span className='position'>Chairman</span>
                                <div>
                                    <span>Akashram J</span>
                                    <span>+91 7708477840</span>
                                </div>
                            </div>

                            <div className='contact-person-div'>
                                <span className='position'>Programming Head</span>
                                <div>
                                    <span>Praveen R</span>
                                    <span>+91 9361352512</span>
                                </div>
                            </div>
                        </div>

                        <div className='contact-person-div-row'>
                            <div className='contact-person-div'>
                                <span className='position'>Overall Co-ordinator </span>
                                <div>
                                    <span>Ramya N</span>
                                    <span>+91 9790463187</span>
                                </div>
                            </div>

                            {/* <div className='contact-person-div'>
                                <span className='position'>Head</span>
                                <div>
                                    <span>Person Name 1</span>
                                    <span>1234567890</span>
                                </div>
                            </div> */}
                        </div>



                    </div>


                </div>

                <span className='copyright'>Copyright ©2023 ISTA</span>
            </footer>
        </>
    )
}



export default Footer;