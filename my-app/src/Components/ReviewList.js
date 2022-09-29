import Review from "./Review";

function ReviewList({ reviews, deleteReview }){
    const reviewElements = reviews.map((review) => <Review key={review.title} deleteReview={deleteReview} review={review} />)
    return(
    <div id='review-list'>
        {reviewElements}
    </div>
    )
}

export default ReviewList