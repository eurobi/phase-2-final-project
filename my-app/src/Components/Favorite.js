

function Favorite({ category, reviews }){
    const fiveStarReviews = reviews.filter(review => {
        return review.category === category && review.rating.toString() === "5"
    })
    console.log(reviews)
    return (
        <div className="fav-div">
            <h3>{category}</h3>
            <h4>★★★★★</h4>
            <ul className="fav-list">
                {fiveStarReviews.map(review => <li className="fav-item" key={review.title}>{review.title}</li>)}
            </ul>
        </div>
    )
}

export default Favorite