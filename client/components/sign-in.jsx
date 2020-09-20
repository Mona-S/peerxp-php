import React from "react";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            user_password: ""    
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
        this.saveInfo(); 
        this.props.setView('newticket', (this.state));
        
    }

    saveInfo() { 
        fetch('/api/signIn.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state)
        })
          .then(response => response.json());
    
    }

    render(){
        return (
            <React.Fragment>
            <div className ="container">
                <h3>Sign In</h3>
                <br/>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <input type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        id="name" 
                        className="form-control" 
                        placeholder="Name" />
                </div>
                <br/>
                <div className="form-group">  
                    <input type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        id="exampleInputEmail1" />     
                </div>
                <br/>
                <div className="form-group">
                    <input type="password" 
                        name="user_password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={this.state.user_password} 
                        onChange={this.handleChange} />
                </div>
                <br/>           
                <button type="submit" name="submit" className="btn btn-dark" >SignIn</button>
            </form>
            </div>

            </React.Fragment>
            
        )
    }
}
