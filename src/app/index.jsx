import React from "react";
import {STYLE} from './components/constants.js';
import {TweetPostForm} from './components/tweetPostForm/index.jsx';
import {InputGroup} from './components/inputGroup/index.jsx';
import {FormGroup} from './components/formGroup/index.jsx';
import {TweetInput} from './components/tweetInput/index.jsx';
import {SubmitButton} from './components/submitButton/index.jsx';
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
                    <TweetPostForm>
                        <FormGroup>
                            <InputGroup>
                                <TweetInput></TweetInput>
                                <SubmitButton></SubmitButton>
                            </InputGroup>
                        </FormGroup>
                    </TweetPostForm>
                </div>
            </MuiThemeProvider>
            );
    }
}