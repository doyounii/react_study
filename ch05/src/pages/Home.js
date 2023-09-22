import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2>HOME</h2>
        <hr/>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/profile/sangmin">Developer1</Link> 
            </li>
            <li>
                <Link to="/profile/yeun">Developer2</Link> 
            </li>
            <li>
                <Link to="/profile/sehoon">Developer3</Link> 
            </li>
        </ul>
    </div>
  )
}

export default Home