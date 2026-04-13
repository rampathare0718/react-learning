let ClockTime=()=>{
    let time=new Date();
    return <p>the time is : {time.toLocaleDateString()}</p>
}

export default ClockTime;