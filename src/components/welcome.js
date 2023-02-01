import SponsorCaraousal from './sponsorCaraousal';
import './welcome.scss'
import { sponsorsList } from '../resources/event-list-data';
import Timer from './timer'



function Welcome() {







    return (
        <div className="welcome-div" id='home-about'>


            <div className="main-infor-container">
                <div className='main-info'>
                    <h1>Welcome</h1>
                    <p>The Department of Information Science and Technology, College of Engineering Guindy takes great pleasure in presenting I++ 2022, the flagship intra college symposium which is organized by the industrious Information Science and Technology Association which the entire Anna University looks forward too. I++ is the perfect blend of brain-wracking workshops, technical events and non-technical events.</p>

                    <h2>Our Partners</h2>
                    {/* <SponsorCaraousal /> */}

                    <div className="sponsor-div">

                        {
                            sponsorsList.map((item, index) => (
                                            
                                <div className="spnsr-item">
                                    <img src={item.sponsorLogo} className='spnsr-img' alt="" />
                                    <span className='spnsr-type'>{item.type}</span>
                                </div>
                            ))
                        }

                    </div>

                </div>

                <div className='main-logo-container'>
                    <div className='main-logo'>
                        <img src={process.env.PUBLIC_URL + "/posters/ipp_22_white_1.png"} alt="" />
                    </div>


                    <Timer />

                    
                </div>
            </div>

           
            







        </div>
    )
}





export default Welcome;