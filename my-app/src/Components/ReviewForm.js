function ReviewForm(){
    return(
        <div className="form-container">
            <form className="review-form">
            <h1>New Review</h1>
                <label for='category'>Category</label>
                <select id='category'>

                </select>
                <label for='review-name'>Title</label>
                    <input id='review-name'></input>
                <label for='review-content'>Review</label>
                    <input id='review-content'></input>
                <label for='rating'>Rating</label>
                    <select id='rating'>

                    </select>

            </form>
        </div>
    )
}

export default ReviewForm