import React from "react";
import {SearchForm} from './components/searchForm/index.jsx';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <div>
                <SearchForm/>
            </div>
            );
    }
}