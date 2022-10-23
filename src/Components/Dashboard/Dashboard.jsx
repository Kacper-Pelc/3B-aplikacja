import React from 'react'
import { useState } from 'react'
import "./Dashboard.scss"
import burger from "../../assets/menu.png";

const Dashboard = () => {
  return (
      <div className='dashboard'>
          <div className="dashboard-container">
        <h1 className='dashboard-container-title'>Imprezy na rok 2022</h1>
      <img className='dashboard-container-img' src={burger} />
      </div>
      <div className="dashboard-container-text">
        <h1 className="dashboard-container-text-imprezy">
          Imprezy
        </h1>
        <h1 className="dashboard-container-text-festiwale">
          Festiwale
        </h1>
        <h1 className="dashboard-container-text-koncerty">
          Koncerty
        </h1>
        <h1 className="dashboard-contaniner-text-karnawal">
          Karnawał
        </h1>
        <h1 className="dashboard-container-text-wolontariat">
          Pomoc
          <a>(Wolontariat)</a>
        </h1>
        <h1 className="dashboard-container-text-spektakle">
          Spektakle
        </h1>
      </div>
    </div>
  )
}


export default Dashboard