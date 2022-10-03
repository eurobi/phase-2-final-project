import Favorite from "./Favorite"

function Favorites({ reviews }){
    const reviewCategories = []
    reviews.map((review) => {
        if(!reviewCategories.includes(review.category)){
            reviewCategories.push(review.category)
        }
    })
    const favoriteElements = reviewCategories.map((category) => { return <Favorite key={category} category={category} reviews={reviews} />})
    return(
        <div id ='favorites-container'>
            {favoriteElements}
        </div>
    )
}

export default Favorites