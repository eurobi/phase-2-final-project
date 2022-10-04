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

    function handleStarClick(e){
        if(e.target.id[0].toString() !== formData.rating.toString()){
            setFormData({...formData, rating: e.target.id[0]})
        }
        else{
            setFormData({...formData, rating: 0})
        }
        
    }

    function starElements(){
        const stars = []
        for(let i = 1; i < 6; i++){
            stars.push(
                <h1 className='star-elements' key={i} id={`${i}-star`} onClick={handleStarClick}>
                    {i <= formData.rating? '★' : '☆'}
                </h1>
            )
        }
        return stars
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
                    <div id='stars'>
                        {starElements()}
                    </div>
                <input id={params.id? 'submit-edit-button' : "submit-button"} type='submit' value={params.id? "Submit Edit" : "Submit Review"}></input>
            </form>
        </div>
    )
}

export default ReviewForm