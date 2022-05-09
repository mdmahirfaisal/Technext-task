import './App.css';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchLaunchData } from './redux/slices/launchSlice';
import NotFound from './components/NotFound/NotFound';


function App() {
  const dispatch = useDispatch();
  dispatch(fetchLaunchData())

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="not" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
