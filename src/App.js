import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLaunchData } from './redux/slices/launchSlice';


function App() {
  const dispatch = useDispatch();
  dispatch(fetchLaunchData())

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>    </div>
  );
}

export default App;
