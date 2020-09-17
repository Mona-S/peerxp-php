import React from "react";
import SignIn from "./sign-in.jsx";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SignIn/>
        )
    }
}


export default App;