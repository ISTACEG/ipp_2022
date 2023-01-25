
import './pie-timer.scss'








function PieTimer(props) {
    return(
        <div className="pie-timer" style={{"--p": props.value}}>{props.value}</div>
    )    
}



export default PieTimer;