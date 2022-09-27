import { useState } from 'react';

function ReviewForm({ addReview }){
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        content: "",
        rating: "0"
    })
    const categories = [
        "",
        "Books",
        "Movies",
        "Shows",
        "Restaurants",
    ]
    function handleSubmit(e){
        e.preventDefault()
        const newReview = {...formData}
        addReview(newReview)
    }
    console.log(formData)
    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="review-form">
            <h1>New Review</h1>
                <label for='category'>Category</label>
                <select id='category' value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    {categories.map(category => <option>{category}</option>)}
                </select>
                <label for='review-name'>Title</label>
                    <input id='review-name' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}></input>
                <label for='review-content' >Review</label>
                    <input id='review-content' value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})}></input>
                <label for='rating'>Rating</label>
                    <select id='rating' value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
}

export default ReviewForm