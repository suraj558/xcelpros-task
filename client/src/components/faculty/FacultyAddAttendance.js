import React from 'react'


 export default class FacultyAddAttendance extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            course:'',
            semester:'',
            present:''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            course: this.state.course,
            semester:this.state.semester,
            present: this.state.present
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
                    <label htmlFor="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course</label>
                    <input type="text" className="form-control" id="course" placeholder="Course" name="course" value={this.state.course} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="semester">Semester</label>
                    <input type="text" className="form-control" id="semester" placeholder="Semester" name="semester" value={this.state.semester} onChange={this.handleChange} />
                </div>

                
                <div>
                    <p>Present</p>
                    <input type="radio" id="yes" name="present" value="yes" checked={this.state.present === 'yes'} onChange={this.handleChange} className="mr-2" />
                    <label htmlFor="yes">Yes</label><br/>
                    <input type="radio" id="no" name="present" value="no" checked={this.state.present === 'no'} onChange={this.handleChange} className="mr-2" />
                    <label htmlFor="no">No</label><br/>
                    
                </div>
               
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

