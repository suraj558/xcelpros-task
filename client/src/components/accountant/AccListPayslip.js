import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export default class AccListPayslip extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            payslips: []
        }
    }
    componentDidMount(){
        axios.get('/accountant/payslip', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    swal(response.data.message)
                } else {
                    const payslips = response.data
                    this.setState({payslips})
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
            <h2>Payslips Info  </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Faculty Name</th>
                    <th scope="col">Day</th>
                    <th scope="col">Month </th>
                    <th scope="col">Year</th>
                    <th scope="col">Basic Salary</th>
                    <th scope="col">HRA</th>
                    <th scope="col">Conveyance</th>
                    <th scope="col">Provident Fund</th>
                    <th scope="col">Total</th>
                    <th scope="col">Cheque No</th>
                    <th scope="col">Bank Name</th>
                    
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.payslips.map((payslip, index) => {
                            return (
                                <tr key={payslip._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ payslip.name }</td>
                                    <td>{ payslip.day }</td>
                                    <td>{ payslip.month }</td>
                                    <td>{ payslip.year }</td>
                                    <td>{ payslip.basic }</td>
                                    <td>{ payslip.hra }</td>
                                    <td>{ payslip.conveyance }</td>
                                    <td>{ payslip.pf }</td>
                                    <td>{ payslip.total }</td>
                                    <td>{ payslip.chno }</td>
                                    <td>{ payslip.bankname }</td>
                                    
                                
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <Link to='/accountant/home/' className="btn btn-primary">Home</Link> | <Link to='/accountant/payslip/new' className="btn btn-primary">Generate Payslip</Link>
            </React.Fragment>
        )
    }
}