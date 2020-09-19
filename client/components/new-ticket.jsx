import React from 'react';


export default class NewTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            department: "",
            category: "",
            url: "",
            subject: "",
            description: "",
            name: "",
            email: "",
            phone: "",
            priority: "",
            userInfo:[]
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
          });

    }

    handleSubmit(event){
        event.preventDefault();
        // postToApi();
        
        this.props.setView('manageTicket', {});
    }

    // postToApi(){
    //     fetch ('https://desk.zoho.com/api/v1/tickets', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //           body: JSON.stringify(this.state)
  
    //     })
        
    // }

    componentDidMount(props) {
        this.getDisplayNameInfo();
        
      }
    
    getDisplayNameInfo(props) {
        fetch(`/api/getInfo.php?username=` + this.props.params.username)
          .then(res => res.json())
          
          .then(response => this.setState({ userInfo: response }));
          
          
            
    }
    

    render() {
        
        return(
            <React.Fragment>
                <div className="container">
               
                <h3>Submit A ticket</h3>
                <h5>Ticket Information</h5>

                <br/>   
                <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                <label className="formLabel">Department</label>
                    <input type="text" 
                        name="department" 
                        value={this.state.department} 
                        onChange={this.handleChange} 
                        id="name" 
                        className="form-control" 
                        placeholder="Department"
                         />
                    
                </div>
                
                <div className="form-group">  
                <label className="formLabel">Category</label>   
                    <input type="text" 
                        name="category" 
                        className="form-control" 
                        placeholder="Category" 
                        value={this.state.category} 
                        onChange={this.handleChange} 
                        id="category" />  
                    
                </div>

                <div className="form-group">
                <label className="formLabel">PWSLab Project URL</label>  
                    <input type="text" 
                        name="url" 
                        className="form-control" 
                        placeholder="URL" 
                        value={this.state.url} 
                        onChange={this.handleChange} />
                     
                </div>

                <div className="form-group">
                <label className="formLabel">Subject</label>   
                    <input type="text" 
                        name="subject" 
                        className="form-control" 
                        value={this.state.subject} 
                        onChange={this.handleChange} />
                    
                </div>

                <div className="form-group">
                <label className="formLabel">Description</label>   
                    <input type="text" 
                        name="description" 
                        className="form-control" 
                        value={this.state.description} 
                        onChange={this.handleChange} />
                    
                </div>
                <br/>
                <h4>Contact Details</h4>
                <div className="form-group">
                <label className="formLabel">Contact Name</label>  
                    <input type="text" 
                        name="username" 
                        className="form-control" 
                        value={this.props.params.username} 
                        readOnly
                       
                       />
                     
                </div>
               
               
                <div className="form-group">
                <label className="formLabel">Email</label>   
                    <input type="text" 
                        name="email" 
                        className="form-control" 
                        value={this.props.params.email} 
                        readOnly
                        
                        />
                    
                </div>

                <div className="form-group">
                <label className="formLabel">Phone</label>   
                    <input type="text" 
                        name="phone" 
                        className="form-control" 
                        value={this.state.phone} 
                        onChange={this.handleChange} />
                    
                </div>
                <br/>
                <h4>Additional Information</h4>
                <div className="form-group">
                <label className="formLabel">Priority</label>   
                    <input type="text" 
                        name="priority" 
                        className="form-control" 
                        value={this.state.priority} 
                        onChange={this.handleChange} />
                    
                </div>
                

                <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                
            </form>
            
            
            </div>

            </React.Fragment>
        )
    }

}
