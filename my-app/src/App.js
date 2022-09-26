import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ReviewList from './Components/ReviewList';
import ReviewForm from './Components/ReviewForm';
import Filters from './Components/Filters'

function App() {
  return (
    <div>
        <NavBar />
        <Filters />
        <ReviewForm />
        <ReviewList />
        <ReviewForm />
    </div>
  );
}

export default App;
