import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            user_password: ""
        }
        
        var obj;
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
        console.log('submit');
        event.preventDefault();
        this.saveInfo();
        // this.props.setView('addTicket', {});
    }


     

    // saveInfo() {
    //     axios.post("http://localhost/server/public/api/signIn.php", 
    //     obj)
    //     .then(response => console.log(response.data));
    // }
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
                        name="user_password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={this.state.user_password} 
                        onChange={this.handleChange} />
                </div>

                <button type="submit" name="submit" className="btn btn-primary">Submit</button>
            </form>

            </React.Fragment>
            
        )
    }
}

export default SignIn;