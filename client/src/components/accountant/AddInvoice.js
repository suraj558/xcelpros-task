import React from 'react'


 export default class FacultyAddAssign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bno:'',
            address:'',
            qty:'',
            desc: '',
            price:'',
            amnt:'',
            total:''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            bno: this.state.bno,
            address:this.state.address,
            qty:this.state.qty,
            desc: this.state.desc,
            price :this.state.price,
            amnt:this.state.amnt,
            total:this.state.total
        }
        this.props.handleSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <form className="col-md-6"onSubmit={this.handleSubmit}>
                 
                 <div className="form-group">
                    <label htmlFor="bno">Bill No</label>
                    <input type="text" className="form-control" id="bno" placeholder="BillNo" name="bno" value={this.state.bno.toUpperCase()} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="qty">Quantity</label>
                    <input type="text" className="form-control" id="qty" placeholder="Quantity" name="qty" value={this.state.qty} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" placeholder="Description" name="desc" value={this.state.desc} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="amnt">Amount</label>
                    <input type="text" className="form-control" id="amnt" placeholder="Amount" name="amnt" value={this.state.amnt} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="total">Total</label>
                    <input type="text" className="form-control" id="total" placeholder=" Total" name="total" value={this.state.total} onChange={this.handleChange} />
                </div>

               
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

