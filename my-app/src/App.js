import './App.css';
import NavBar from './Components/NavBar';
import ReviewList from './Components/ReviewList';
import ReviewForm from './Components/ReviewForm';
import Filters from './Components/Filters'
import Favorites from './Components/Favorites';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  // Reviews State
  const [reviews, setReviews] = useState([])

  // Filter State
  const [filters, setFilters] = useState({
    filter: "",
    sort: "Rating (High to Low)",
    search: ""
  },[])

  //Get Data
  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(r => r.json())
      .then(reviews => setReviews(reviews))
  },[])

  //Applying filters to Reviews
  function applyFilters(reviews, filters){
    const filteredReviews = reviews.filter((review) => {
      if(review.category.includes(filters.filter) && review.title.toLowerCase().includes(filters.search)){
        return true
      }
    })
    if(filters.sort === "Rating (High to Low)"){
      return filteredReviews.sort((review1, review2) => review2.rating - review1.rating)
    }
    else if(filters.sort === "Rating (Low to High)"){
      return filteredReviews.sort((review1, review2) => review1.rating - review2.rating)
    }
    
  }

  //POST new review
  function addReview(newReview){
    setReviews([...reviews, newReview])
    fetch('http://localhost:3000/reviews',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
  }

  //DELETE review
  function deleteReview(id){
    const newReviews = reviews.filter((review) => {
      return review.id.toString() !== id.toString()
    })
    fetch(`http://localhost:3000/reviews/${id}`,{
      method: 'DELETE'
    })
    setReviews(newReviews)
  }

  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Filters filters={filters} setFilters={setFilters} />
            <ReviewList deleteReview={deleteReview} reviews={applyFilters(reviews, filters)} />
          </Route>
          <Route exact path ='/new-review'>
            <ReviewForm addReview={addReview} />
          </Route>
          <Route>
            <Favorites />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
