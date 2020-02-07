import React from 'react'


 export default class AddPayslip extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            desg:'',
            day:'',
            month: '',
            year:'',
            basic:'',
            hra : '',
            conveyance :'',
            pf :'',
            total : '',
            chno : '',
            bankname : ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            desg: this.state.desg,
            day:this.state.day,
            month:this.state.month,
            year: this.state.year,
            basic: this.state.basic,
            hra: this.state.hra,
            conveyance: this.state.conveyance,
            pf: this.state.pf,
            total: this.state.total,
            chno: this.state.chno,
            bankname: this.state.bankname
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
            <form className="col- md-6"onSubmit={this.handleSubmit}>
                 
                 <div className="form-group">
                    <label htmlFor="name">Faculty Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="desg">Designation</label>
                    <input type="text" className="form-control" id="desg" placeholder="Designation" name="desg" value={this.state.desg.toUpperCase()} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="day">Day</label>
                    <input type="text" className="form-control" id="day" placeholder="Day" name="day" value={this.state.day} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="month">Month</label>
                    <input type="text" className="form-control" id="month" placeholder="Topic" name="month" value={this.state.month} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" className="form-control" id="year" placeholder="Year" name="year" value={this.state.year} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="basic">Basic</label>
                    <input type="text" className="form-control" id="basic" placeholder="Basic" name="basic" value={this.state.basic} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="hra">HRA</label>
                    <input type="text" className="form-control" id="hra" placeholder="HRA" name="hra" value={this.state.hra} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="conveyance">Conveyance</label>
                    <input type="text" className="form-control" id="conveyance" placeholder="Conveyance" name="conveyance" value={this.state.conveyance} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="pf">Provident Fund</label>
                    <input type="text" className="form-control" id="pf" placeholder="PF" name="pf" value={this.state.pf} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="total">Total</label>
                    <input type="text" className="form-control" id="total" placeholder="Total" name="total" value={this.state.total} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="chno">Cheque No</label>
                    <input type="text" className="form-control" id="chno" placeholder="Cheque No" name="chno" value={this.state.chno.toUpperCase()} onChange={this.handleChange} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="bankname">Name of Bank</label>
                    <input type="text" className="form-control" id="bankname" placeholder="Bank Name" name="bankname" value={this.state.bankname} onChange={this.handleChange} />
                </div>
                

 <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

