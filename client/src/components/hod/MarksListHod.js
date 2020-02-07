import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class MarksListHod extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            marks: []
        }
    }
    componentDidMount(){
        axios.get('/hod/marks', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const marks = response.data
                    this.setState({marks})
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
            <h2>Students Marks - {this.state.marks.length} </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Subjects</th>
                    <th scope="col">Marks</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.marks.map((mark, index) => {
                            return (
                                <tr key={mark._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ mark.name }</td>
                                    <td>{ mark.course }</td>
                                    <td>{ mark.semester }</td>
                                    <td>{ String(mark.subjects,' ') }</td>
                                    <td>{ String(mark.marks) }</td>
                                    
                                
                                    
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