import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class StudentsListHod extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
    }
    componentDidMount(){
        axios.get('/hod/students', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const students = response.data
                    this.setState({students})
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
            <h2>Students - {this.state.students.length} </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Performance</th>
                    <th scope="col">Fees</th>
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.students.map((student, index) => {
                            return (
                                <tr key={student._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ student.name }</td>
                                    <td>{ student.course }</td>
                                    <td>{ student.semester }</td>
                                    <td>{ student.performance }</td>
                                    <td>{ student.fees }</td>
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/hod/home/' className="btn btn-primary">Home</Link>
            </React.Fragment>
        )
    }
}