import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class FacultyListAttendance extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            attendances: []
        }
    }
    componentDidMount(){
        axios.get('/faculty/attendance', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const attendances = response.data
                    this.setState({attendances})
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
            <h2>Students Attendance  </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Date</th>
                    <th scope="col">Present</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.attendances.map((attendance, index) => {
                            return (
                                <tr key={attendance._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ attendance.name }</td>
                                    <td>{ attendance.course }</td>
                                    <td>{ attendance.semester }</td>
                                    <td>{ String(attendance.date) }</td>
                                    <td>{ String(attendance.present) }</td>
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/faculty/home/' className="btn btn-primary">Home</Link> |  <Link to='/faculty/attendance/new' className="btn btn-primary">Add Attendance</Link>
            </React.Fragment>
        )
    }
}