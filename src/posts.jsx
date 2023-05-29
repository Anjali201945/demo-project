function Posts(props){
    console.log(props)
    return(
        <div className="container">
            <div className="img">
                <img src={props.imgSrc}></img>

                <p>{props.content}</p>
            </div>
            <button>lern more</button>
            <button>share</button>

        </div>


    )
}
    
export default Posts