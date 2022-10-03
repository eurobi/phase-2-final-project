
function Review({ deleteReview, review }){
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
            <div className="review-card-header">
                <h1>{review.title}</h1>
                <div className="button-div">
                    <button id={review.id} className="edit-button">Edit</button>
                    <button id={review.id} onClick={(e) => deleteReview(e.target.id)} className="delete-button">Delete</button>
                </div>
            </div>
            <h3>{review.category}</h3>
            <p>{review.content}</p>
            <p>{handleStars(review.rating)}</p>
        </div>
    )
}

export default Review