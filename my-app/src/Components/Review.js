function Review({ review }){
    function handleStars(rating){
        
    }
    return(
        <div className='card'>
            <h1>{review.title}</h1>
            <h3>{review.category}</h3>
            <p>{review.content}</p>
            <p> ★ ★ ★ ☆ ☆ </p>
        </div>
    )
}

export default Review