import React from "react";
import {TwitterPostForm} from './components/twitterPostForm/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <MuiThemeProvider>
                <div className="row">
                    <TwitterPostForm></TwitterPostForm>
                </div>
            </MuiThemeProvider>
            );
    }
}