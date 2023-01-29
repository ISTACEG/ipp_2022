import SponsorCaraousal from './sponsorCaraousal';
import './welcome.scss'
import Timer from './timer'



function Welcome() {







    return (
        <div className="welcome-div" id='home-about'>


            <div className="main-infor-container">
                <div className='main-info'>
                    <h1>Welcome</h1>
                    <p>The Department of Information Science and Technology, College of Engineering Guindy takes great pleasure in presenting I++ 2022, the flagship intra college symposium which is organized by the industrious Information Science and Technology Association which the entire Anna University looks forward too. I++ is the perfect blend of brain-wracking workshops, technical events and non-technical events.</p>

                    <h2>Our Partners</h2>
                    <SponsorCaraousal />
                </div>

                <div className='main-logo-container'>
                    <div className='main-logo'>
                        <img src={process.env.PUBLIC_URL + "/posters/i++22_white_1.png"} alt="" />
                    </div>


                    <Timer />

                    
                </div>
            </div>

           
            







        </div>
    )
}





export default Welcome;