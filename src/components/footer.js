
import '../components/footer.scss'



function Footer() {
    return (
        <>
            <footer>
                <div className="footer-div">

                    <div className="social-div">
                        <img src="ISTA_GROUP_LOGO-removebg-preview-trimmy.png" className='ista-logo' alt="" />

                        <div className='social-handles'>
                            <a href="">
                                <img src="Instagram-icon.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="email-icon.svg" class="email-logo" alt="" />
                            </a>
                            <a href="">
                                <img src="linkedin-icon.svg" alt="" />
                            </a>
                        </div>
                    </div>


                    <div className='contact-div'>
                        <span className='contact-title'>Contact</span>
                        
                        <div className='contact-person-div-row'>
                            <div className='contact-person-div'>
                                <span className='position'>Head</span>
                                <div>
                                    <span>Person Name 1</span>
                                    <span>1234567890</span>
                                </div>
                            </div>

                            <div className='contact-person-div'>
                                <span className='position'>Head</span>
                                <div>
                                    <span>Person Name 1</span>
                                    <span>1234567890</span>
                                </div>
                            </div>
                        </div>

                        <div className='contact-person-div-row'>
                            <div className='contact-person-div'>
                                <span className='position'>Head</span>
                                <div>
                                    <span>Person Name 1</span>
                                    <span>1234567890</span>
                                </div>
                            </div>

                            <div className='contact-person-div'>
                                <span className='position'>Head</span>
                                <div>
                                    <span>Person Name 1</span>
                                    <span>1234567890</span>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>

                <span className='copyright'>Copyright ©2023 ISTA</span>
            </footer>
        </>
    )
}



export default Footer;