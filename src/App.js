import './App.css';
import './style/MovieList.css';
import './style/MovieCard.css';
import './style/Add.css';
import Welcome from './components/Welcome';
import MovieList from './components/MovieList';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/movielist" element={<MovieList/>} />
      </Routes>
    </div>
  );
}

export default App;
