import React from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import axios from '../../config/axios'
import image from './ticket-master.png'

function AdminHome() {
  const handleLogout = () => {
    axios.delete('/users/logout', {
      headers: {
          'x-auth': localStorage.getItem('x-auth')
      }
  })
      .then((response) => {
         console.log(response)
          localStorage.clear('x-auth')
          swal({
              title: " Success!",
              text:    response.data,
              icon: "success",
              button: "OK",
            });
            
      })
      .catch((err) => {
          swal(err)
      })
  
  }
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
              <React.Fragment>
             

            <li className="nav-item">
            <Link className="nav-link" to="/admin/students">Students</Link>
            </li>

          <li className="nav-item">
          <Link className="nav-link" to="/admin/faculty">Faculty</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to="/admin/hod">HOD</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to="/admin/fees">Fees</Link>
         </li>

         <li className="nav-item">
          <Link className="nav-link" to="/admin/salary">Salary</Link>
         </li>

        <li className="nav-item">
        <Link className="nav-link" onClick={handleLogout} to="/">Logout</Link>
         </li>

        </React.Fragment>     
              
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
export default AdminHome