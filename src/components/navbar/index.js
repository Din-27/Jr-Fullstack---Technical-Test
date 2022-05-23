import React from 'react'
import '../../css/navbar.css'

function Navbar() {
  return (
    <div className="container">
                <nav className="navbar navbar-expand-lg bg-transparent">
                        <a className="navbar-brand" href="#">
                            finsweet
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse end-nav" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Blogs</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link active" href="#">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-nav btn-outline-warning fw-bold" href="#">Clone project</button>
                                </li>
                            </ul>
                        </div>
                </nav>
    </div>
    
  )
}

export default Navbar