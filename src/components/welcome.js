import SponsorCaraousal from './sponsorCaraousal';
import './welcome.scss'
import Timer from './timer'




function Welcome() {








    return (
        <div className="welcome-div" id='home-about'>


            <div className="main-infor-container">
                <div className='main-info'>
                    <h1>Welcome</h1>
                    <p>The Department of Information Science and Technology, College of Engineering Guindy takes great pleasure in presenting I++ 2022, the flagship intra college symposium which is organized by the industrious Information Science and Technology Association which the entire Anna University looks forward too. I++ is the perfect blend of brain-wracking workshops, technical events and non-technical events, the title sponsors and associate sponsors graciously offer to make this event a grand success.</p>
                </div>

                <div className='main-logo-container'>
                    <div className='main-logo'>
                        <img src="i++_mainlogo.png" alt="" />
                    </div>


                    <Timer />

                    
                </div>
            </div>

           
            
            <SponsorCaraousal />


        </div>
    )
}





export default Welcome;