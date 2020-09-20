import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';


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
            userInfo:{},
            modalOpen: false
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
        this.postToApi();   
        this.toggleModal();
    }

    postToApi(){
        fetch ('https://desk.zoho.in/api/v1/tickets', {
            method: 'POST',
            headers: { 'Access-Control-Allow-Headers': '*',
                        'Content-Type': 'application/json',
                        'orgId':'60001280952',
                        'Authorization': '9446933330c7f886fbdf16782906a9e0' },
              body: JSON.stringify({
                "subCategory" : "Sub General",
                "cf" : {
                        "cf_permanentaddress" : null,
                        "cf_dateofpurchase" : null,
                        "cf_phone" : null,
                        "cf_numberofitems" : null,
                        "cf_url" : null,
                        "cf_secondaryemail" : null,
                        "cf_severitypercentage" : "0",
                         "cf_modelname" : ""
                     },
                "productId" : "",
                "contactId" : "7189000002555534",
                "subject" : this.state.subject,
                "dueDate" :"",
                "departmentId" : "7189000001062045",
                "channel" : "",
                "description" : this.state.description,
                "priority" : this.state.priority,
                "classification" : "",
                "assigneeId" : "",
                "phone" : this.state.phone,
                "category" : this.state.category,
                "email" : this.state.email,
                "status" : "Open"
            })
        });      
    }

    componentDidMount() {
        this.getDisplayNameInfo();    
    }
    
    getDisplayNameInfo() {
        fetch('/api/getInfo.php?username=' + this.props.params.username)
          .then(res => res.json())  
          .then(response => this.setState({ userInfo: response }));      
    }

    toggleModal() {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    render() {  
        const {username, email} = this.state.userInfo;
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
                            placeholder="Department"/>         
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
                            value={username} 
                            readOnly/>
                     </div>
                    <div className="form-group">
                        <label className="formLabel">Email</label>   
                        <input type="text" 
                            name="email" 
                            className="form-control" 
                            value={email} 
                            readOnly/>     
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

            <Modal isOpen={this.state.modalOpen}>
            <ModalHeader>
              New Ticket has been created !
            </ModalHeader>
            <ModalFooter>
              <Button onClick={() => this.props.setView('manageTicket', {})} color="info">OK</Button>    
            </ModalFooter>
          </Modal>
            </div>
            </React.Fragment>
        )
    }

}
