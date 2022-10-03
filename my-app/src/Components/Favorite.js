

function Favorite({ category, reviews }){
    const fiveStarReviews = reviews.filter(review => {
        return review.category === category && review.rating.toString() === "5"
    })
    console.log(reviews)
    return (
        <div>
            <h1>{category}</h1>
            <ul>
                {fiveStarReviews.map(review => <li key={review.title}>{review.title}</li>)}
            </ul>
        </div>
    )
}

export default Favorite