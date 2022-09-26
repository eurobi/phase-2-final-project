import Review from "./Review";

function ReviewList({ reviews }){
    const reviewElements = reviews.map((review) => <Review key={review.title} review={review} />)
    console.log(reviewElements)
    return(
    <div id='review-list'>
        {reviewElements}
    </div>
    )
}

export default ReviewList