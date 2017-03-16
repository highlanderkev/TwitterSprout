import React from "react";
import {SearchForm} from './components/searchForm/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <MuiThemeProvider>
                <div className="row">
                    <SearchForm/>
                </div>
            </MuiThemeProvider>
            );
    }
}