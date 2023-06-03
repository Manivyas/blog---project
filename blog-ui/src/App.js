import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ArticlesList from './pages/articles-list';
import About from './pages/about';
import Article from './pages/articles';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articleslist" element={<ArticlesList />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
