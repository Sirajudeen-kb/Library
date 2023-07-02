import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ViewBooks from './Pages/ViewBooks';
import BorrowedBooks from './Pages/BorrowedBooks';

import './App.css'



function App()
{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewbooks" element={<ViewBooks />} />
          <Route path="/borrowed-books" element={<BorrowedBooks/>} />
        </Routes>
      </Router>

    </div>
  );
}
 
export default App;