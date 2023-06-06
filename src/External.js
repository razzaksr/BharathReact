const External=(receiver)=>{
    return(
        <>
            <img src={receiver.propertyOne} width={receiver.propertyTwo} style={receiver.propertyThree}/>
            <button className="btn btn-success">
                Modify
            </button>
        </>
    )
}
export default External;