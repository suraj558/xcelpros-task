import React from 'react'
import axios from '../../config/axios'
import swal from 'sweetalert'
import FacultyAddAssign from './FacultyAddAssign'

export default class AssignNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (formData) => {
        axios.post('faculty/assignments',formData,{
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
                    text: " Assignment Added!",
                    icon: "success",
                    button: " OK",
                  });
                  
               this. props.history.push('/faculty/assignments')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <React.Fragment>
                <h2>Add Assignment</h2>
                <FacultyAddAssign handleSubmit={this.handleSubmit} />    
            </React.Fragment>
        )
    }
}