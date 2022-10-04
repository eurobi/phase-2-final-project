import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";


function ReviewForm({ addReview , editReview}){
    const params = useParams()

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
        "Music"
    ]
    const history = useHistory()

    if(params.id !== undefined  && formData.title === ""){
        fetch(`http://localhost:3000/reviews/${params.id}`)
            .then(resp => resp.json())
            .then(review => {
                setFormData({
                    category: review.category,
                    title: review.title,
                    content: review.content,
                    rating: review.rating
                })
            })
    }

    function handleSubmit(e){
        e.preventDefault()
        const newReview = {...formData}
        if(params.id === undefined){
            addReview(newReview)
        history.push("/")
        }
        else{
            editReview(params.id, newReview)
        }
        
    }



    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="review-form">
            <h1>New Review</h1>
                <label for='category'>Category</label>
                <select id='category' value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    {categories.map(category => <option key={category}>{category}</option>)}
                </select>
                <label for='review-name'>Title</label>
                    <input id='review-name' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}></input>
                <label for='review-content' >Review</label>
                    <textarea id='review-content' value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})}></textarea>
                <label for='rating'>Rating</label>
                    <select id='rating' value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                <input id={params.id? 'submit-edit-button' : "submit-button"} type='submit' value={params.id? "Submit Edit" : "Submit Review"}></input>
            </form>
        </div>
    )
}

export default ReviewForm