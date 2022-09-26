function Review({ review }){
    function handleStars(rating){
        let stars = []
        for(let i = 1; i <= 5; i ++){
            if(i <= rating){
                stars.push('★')
            }else{
                stars.push('☆')
            }
        }
        return stars.join('')
    }
    return(
        <div className='card'>
            <h1>{review.title}</h1>
            <h3>{review.category}</h3>
            <p>{review.content}</p>
            <p>{handleStars(review.rating)}</p>
        </div>
    )
}

export default Review