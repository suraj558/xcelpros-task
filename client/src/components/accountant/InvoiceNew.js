import React from 'react'
import axios from '../../config/axios'
import swal from 'sweetalert'
import AddInvoice from './AddInvoice'

export default class InvoiceNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (formData) => {
        axios.post('accountant/invoice',formData,{
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
                    text: " Invoice Created!",
                    icon: "success",
                    button: " OK",
                  });
                  
               this. props.history.push('/accountant/invoice')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <React.Fragment>
                <h2>Create Invoice</h2>
                <AddInvoice handleSubmit={this.handleSubmit} />    
            </React.Fragment>
        )
    }
}