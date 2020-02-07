import React from 'react'
import FacultyAddAttendance from './FacultyAddAttendance'
import axios from '../../config/axios'
import swal from 'sweetalert'

export default class AttendanceNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (formData) => {
        axios.post('faculty/attendance',formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log(response)
            if(response.data.hasOwnProperty('errors')){
                swal(response.data.message)
            } else {
                swal({
                    title: " Success!",
                    text: " Attendance  Added!",
                    icon: "success",
                    button: " OK",
                  });
                  
               this. props.history.push('/faculty/attendance')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <React.Fragment>
                <h2>Add Attendance</h2>
                <FacultyAddAttendance handleSubmit={this.handleSubmit} />    
            </React.Fragment>
        )
    }
}