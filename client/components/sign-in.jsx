import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
          });

    }

    handleSubmit(event){
        event.preventDefault();
        this.saveInfo();
        this.props.setView('addTicket', {});
    }

    saveInfo() {
        fetch('/api/sign-in.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state)
        })
          .then(response => response.json());
    
      }

    render(){
        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <input type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        id="name" 
                        className="form-control" 
                        placeholder="Name" />
                </div>
                
                <div className="form-group">  
                    <input type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        id="exampleInputEmail1" />     
                </div>

                <div className="form-group">
                    <input type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </React.Fragment>
            
        )
    }
}

export default SignIn;