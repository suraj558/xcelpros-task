import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class FacultyListAdmin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            faculties: []
        }
    }
    componentDidMount(){
        axios.get('/admin/faculty', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const faculties = response.data
                    this.setState({faculties})
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="container mt-5">
            <h2>Faculties - {this.state.faculties.length} </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Performance</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.faculties.map((faculty, index) => {
                            return (
                                <tr key={faculty._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ faculty.name }</td>
                                    <td>{ faculty.salary }</td>
                                    <td>{ faculty.performance }</td>
                                    
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/admin/home/' className="btn btn-primary">Home</Link>
            </React.Fragment>
        )
    }
}