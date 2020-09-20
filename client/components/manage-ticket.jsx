import React from "react";

export default class ManageTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketDetails: {}
        }
    }

    componentDidMount(props) {
        this.getFromApi();    
    }

    getFromApi(){
        fetch ('https://desk.zoho.in/api/v1/tickets', {
            
            headers: { 'Access-Control-Allow-Headers': '*',
                        'Content-Type': 'application/json',
                        'orgId':'60001280952',
                        'Authorization': '9446933330c7f886fbdf16782906a9e0' }
              
        })
        .then(res => res.json())
        .then(response => this.setState({ ticketDetails : response}))  ; 
    }

    render() {
        const {subject, description, ticketStatus, ticketID} = this.state.ticketDetails;
        return (
            <div>
                <br/>
                <h4>Ticket Details</h4>
                <br/>
                <p>{ticketID}</p>
                <p>{ticketStatus}</p>
                <p>{subject}</p>
                <p>{description}</p>
               
                
            </div>
        )
    }
}

