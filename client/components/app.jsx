import React from "react";
import SignIn from "./sign-in.jsx";
import NewTicket from "./new-ticket.jsx";
import ManageTicket from "./manage-ticket.jsx";


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view: {
              name: 'signIn',
              params: {}
              
            }
    }
    this.setView = this.setView.bind(this);
}

    setView(name, params) {
        this.setState({ view: {
          name: name,
          params: params
        }});
      }
    

    render(){
        if (this.state.view.name === 'newticket') {
            return (
                <React.Fragment>
                    <NewTicket setView={this.setView} params={this.state.view.params}/>
                </React.Fragment>
            )
        }
        else if (this.state.view.name === 'manageTicket') {
            return (
                <React.Fragment>
                    <ManageTicket setView={this.setView} params={this.state.view.params}/>
                </React.Fragment>
            )
        }
        else 
            return ( 
                <React.Fragment>
                    <SignIn setView={this.setView} params={this.state.view.params}/>
                </React.Fragment>
            )
        }       
    
}