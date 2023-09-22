import React , { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Layout from './Layout';
import Articles from './pages/Articles';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element ={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
