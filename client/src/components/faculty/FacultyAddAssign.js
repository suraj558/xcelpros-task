import React from 'react'


 export default class FacultyAddAssign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            course:'',
            semester:'',
            topic: '',
            duedate:''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            course: this.state.course,
            semester:this.state.semester,
            topic:this.state.topic,
            duedate: this.state.duedate
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

                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input type="text" className="form-control" id="topic" placeholder="Topic" name="topic" value={this.state.topic} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="duedate">Due Date</label>
                    <input type="text" className="form-control" id="duedate" placeholder="Due Date" name="duedate" value={this.state.duedate} onChange={this.handleChange} />
                </div>

               
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

