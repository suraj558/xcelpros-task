import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class AccListInvoice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            invoices: []
        }
    }
    componentDidMount(){
        axios.get('/accountant/invoice', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const invoices = response.data
                    this.setState({invoices})
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
            <h2>Invoice Info  </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Bill No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Address</th>
                    <th scope="col">Quantity </th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.invoices.map((invoice, index) => {
                            return (
                                <tr key={invoice._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ invoice.bno }</td>
                                    <td>{ invoice.date }</td>
                                    <td>{ invoice.address }</td>
                                    <td>{ invoice.qty }</td>
                                    <td>{ invoice.desc }</td>
                                    <td>{ invoice.price }</td>
                                    <td>{ invoice.amnt }</td>
                                    <td>{ invoice.total }</td>
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/accountant/home/' className="btn btn-primary">Home</Link> | <Link to='/accountant/invoice/new' className="btn btn-primary">Generate Invoice</Link>
            </React.Fragment>
        )
    }
}