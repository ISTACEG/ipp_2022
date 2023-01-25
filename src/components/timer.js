import {useEffect, useState} from 'react'
import './timer.scss'




function convertToDHMS(diff) {
    
    var seconds = Number(diff/1000);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor((seconds % (3600*24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    
    return {'d':d, 'h':h, 'm':m, 's':s};
}




function Timer() {


    var targetDate = Date.parse('02 Feb 2023 00:00:00')
    
    const [countDown, setCountDown] = useState(targetDate - new Date().getTime());
    const [countDownDHMS, setCountDownDHMS] = useState({'d':0, 'h':0, 'm':0, 's':0});


    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(targetDate - new Date().getTime());
        }, 1000);

        console.log(countDown)
    
        return () => clearInterval(interval);
    }, [targetDate]);


    useEffect(() => {
        setCountDownDHMS(convertToDHMS(countDown))
    }, [countDown])




    return (
        <>
            {((Date.now() <= targetDate))? (
                <div className='timer-container'>

                    <div className='days-pie-timer'>
                        {/* <PieTimer value={Math.round((27/31)*100)} totalValue={31} /> */}
                        <span className='days-timer'>{countDownDHMS.d}</span>
                        <span className='label'>days</span>
                    </div>

                    <div className='hours-pie-timer'>
                        {/* <PieTimer value={Math.round((8/24)*100)} /> */}
                        <span className='hours-timer'>{countDownDHMS.h}</span>
                        <span className='label'>hours</span>
                    </div>
                    <div className='minutes-pie-timer'>
                        {/* <PieTimer value={Math.round((45/60)*100)} /> */}
                        <span className='minutes-timer'>{countDownDHMS.m}</span>
                        <span className='label'>minutes</span>
                    </div>
                    <div className='seconds-pie-timer'>
                        {/* <PieTimer value={Math.round((26/60)*100)} /> */}
                        <span className='seconds-timer'>{countDownDHMS.s}</span>
                        <span className='label'>seconds</span>
                    </div>
                </div>
            ) : (
                <button className="register-button">
                    Register
                </button>
            )
            }
            
        </>
    )
}






export default Timer;