import React from 'react'
import axios from '../../config/axios'
import swal from 'sweetalert'
import AddPayslip from './AddPayslip'

export default class PayslipNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (formData) => {
        axios.post('accountant/payslip',formData,{
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
                    text: " Payslip Created!",
                    icon: "success",
                    button: " OK",
                  });
                  
               this. props.history.push('/accountant/payslip')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <React.Fragment>
                <h2>Create Payslips </h2>
                <AddPayslip handleSubmit={this.handleSubmit} />    
            </React.Fragment>
        )
    }
}