import React from 'react'
import {Link} from 'react-router-dom'
import image from './ticket-master.png'

function Home() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="http://localhost:3000/">School App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {
              
            
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/login">Login</Link>
                  </li>
                  
        
                
                
              
            }
          </ul>
        </div>
      </nav>
        <div className="text-center mt-5">
            <h2 className="mb-5 font-weight-bold">Welcome To School App</h2>
            <img src={image} />
        </div>
        </React.Fragment>
    )
}
export default Home