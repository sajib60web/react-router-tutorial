import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import User from './pages/User';
import Error from './pages/Error';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
