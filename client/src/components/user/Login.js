import React from 'react'
import axios from '../../config/axios'
import swal from 'sweetalert'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/users/login', formData)
            .then((response) => {

                console.log(response)
                const { token ,message} = response.data
                 if(token && message==='Welcome Admin'){
                    localStorage.setItem('x-auth', token)
                    
                    swal({
                        title:  response.data.message,
                        text: "  Successfully Logged In!",
                        icon: "success",
                        button: " OK",
                      });
                   this.props.history.push('/admin/home')
                } 
               else  if(token && message==='Welcome Faculty'){
                    localStorage.setItem('x-auth', token)
                    
                    swal({
                        title:  response.data.message,
                        text: "  Successfully Logged In!",
                        icon: "success",
                        button: " OK",
                      });
                   this.props.history.push('/faculty/home')
                }

               else if(token && message==='Welcome Principal'){
                    localStorage.setItem('x-auth', token)
                    
                    swal({
                        title:  response.data.message,
                        text: "  Successfully Logged In!",
                        icon: "success",
                        button: " OK",
                      });
                   this.props.history.push('/principal/home')
                }

                else if(token && message==='Welcome HOD'){
                    localStorage.setItem('x-auth', token)
                    
                    swal({
                        title:  response.data.message,
                        text: "  Successfully Logged In!",
                        icon: "success",
                        button: " OK",
                      });
                    this.props.history.push('/hod/home')
                }

               else  if(token && message==='Welcome Accountant'){
                    localStorage.setItem('x-auth', token)
                
                    swal({
                        title:  response.data.message,
                        text: "  Successfully Logged In!",
                        icon: "success",
                        button: " OK",
                      });
                  this. props.history.push('/accountant/home')
                }
                else {
                    swal(response.data)
                } 
            })
            .catch((err) => {
                swal(err)
            })
    
    }
    render(){
        return (
            <div className="justify-content-md-center container">
                <form className="form-signin mt-5" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>
                    
                    <input type="text" className="form-control mb-3" placeholder="Email"  name="email" value={this.state.email} onChange={this.handleChange}/>
                    
                    <input type="password" className="form-control mb-3" placeholder="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                    
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login