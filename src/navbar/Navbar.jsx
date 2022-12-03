import { Link, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Details from '../pages/Details';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='header'>
        <h3>Navbar</h3>
        <ul>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Home
          </Link>
        </ul>
        <ul>
          <Link style={{ textDecoration: 'none' }} to='/details'>
            Details
          </Link>
        </ul>
        <ul>
          <Link style={{ textDecoration: 'none' }} to='/about'>
            About
          </Link>
        </ul>
        <ul>
          <Link style={{ textDecoration: 'none' }} to='*'>
            404 Example
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Navbar;
