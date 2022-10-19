import React from 'react'
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="home">
          <div className="home-container">
              <Link to="wolontariusz">
                  <button  className='home-container-button'>
                  <h1>Wolontariusz</h1>
              </button>
              </Link>
              <button className='home-container-button'>
                  <h1>Organizator</h1>
              </button>
              <button className='home-container-button'>
                  <h1>Kontynuuj bez logowania</h1>
            </button>
          </div>
      </div>
  )
}

export default Home