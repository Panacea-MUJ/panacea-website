import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from './pages/NoPage';
import Events from './pages/Events';
import Blog from './pages/Blog';
// import App from './App';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="*" element={<NoPage />} />
          
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

