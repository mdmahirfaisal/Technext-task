import './App.css';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchLaunchData } from './redux/slices/launchSlice';


function App() {
  const dispatch = useDispatch();
  dispatch(fetchLaunchData())

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
