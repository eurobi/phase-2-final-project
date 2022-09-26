import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ReviewList from './Components/ReviewList';
import ReviewForm from './Components/ReviewForm';
import Filters from './Components/Filters'
import reviews from './data/dummy_reviews'

function App() {
  console.log(reviews)
  return (
    <div>
        <NavBar />
        <Filters />
        <ReviewList reviews={reviews} />
        <ReviewForm />
    </div>
  );
}

export default App;
