import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ReviewList from './Components/ReviewList';
import ReviewForm from './Components/ReviewForm';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <ReviewForm />
        <ReviewList />
    </div>
  );
}

export default App;
