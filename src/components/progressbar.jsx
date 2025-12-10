function ProgressBar({label, value}){
    return(
        <div className="progress">
            <div className="progressview" style={{width: value}}>
            <span className="progress-label"> {label} </span>
            </div>
        </div>
    )
}
export default ProgressBar;