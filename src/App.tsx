import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import { PageNotFound } from './Component/404';
import { SignUp } from './Component/singUp';
import { Header } from './Common/header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
