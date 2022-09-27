import './App.css';
import NavBar from './Components/NavBar';
import ReviewList from './Components/ReviewList';
import ReviewForm from './Components/ReviewForm';
import Filters from './Components/Filters'
import dummyreviews from './data/dummy_reviews'
import { useState } from 'react';

function App() {
  // Reviews State
  const [reviews, setReviews] = useState(dummyreviews)
  
  // Filter State
  const [filters, setFilters] = useState({
    filter: "",
    sort: "",
    search: ""
  },[])

  //Applying filters to Reviews
  function applyFilters(reviews, filters){
    const filteredReviews = reviews.filter((review) => {
      if(review.category.includes(filters.filter) && review.title.toLowerCase().includes(filters.search)){
        return true
      }
    })
    return filteredReviews
  }

  //Add new review
  function addReview(newReview){
    setReviews([...reviews, newReview])
  }

  return (
    <div>
        <NavBar />
        <Filters filters={filters} setFilters={setFilters} />
        <ReviewList reviews={applyFilters(reviews, filters)} />
        <ReviewForm addReview={addReview} />
    </div>
  );
}

export default App;
