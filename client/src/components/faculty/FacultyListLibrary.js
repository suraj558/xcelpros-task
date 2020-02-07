import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class FacultyListLibrary extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        axios.get('/faculty/library', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const books = response.data
                    this.setState({books})
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
            <h2>Library Books Info  </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Description</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.books.map((book, index) => {
                            return (
                                <tr key={book._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ book.title }</td>
                                    <td>{ book.category.name }</td>
                                    <td>{ book.author }</td>
                                    <td>{ book.desc }</td>
                                    
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/faculty/home/' className="btn btn-primary">Home</Link>
            </React.Fragment>
        )
    }
}