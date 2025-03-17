import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tool from './components/Tool';
// import About from './pages/About';
// import ChapterList from './pages/ChapterList';
// import Blog from './pages/Blog';
// import Reservation from './pages/Reservation';

function App() {
    return (
        <Router>
			<Tool/>
            <Navbar />
            <Routes>
				<Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/chapter-list" element={<ChapterList />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/reservation" element={<Reservation />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
