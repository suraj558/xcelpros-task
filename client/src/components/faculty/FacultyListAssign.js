import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class FacultyListAssign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            assignments: []
        }
    }
    componentDidMount(){
        axios.get('/faculty/assignments', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const assignments = response.data
                    this.setState({assignments})
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
            <h2>Students Assignments  </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Issue Date</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Topic</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.assignments.map((assignment, index) => {
                            return (
                                <tr key={assignment._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ assignment.name }</td>
                                    <td>{ assignment.course }</td>
                                    <td>{ assignment.semester }</td>
                                    <td>{ String(assignment.date) }</td>
                                    <td>{ String(assignment.duedate) }</td>
                                    <td>{ assignment.topic }</td>
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/faculty/home/' className="btn btn-primary">Home</Link> | <Link to='/faculty/assignments/new' className="btn btn-primary">Add Assignment</Link>
            </React.Fragment>
        )
    }
}