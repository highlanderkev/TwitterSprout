import React from "react";
import {InputGroup} from '../inputGroup/index.jsx';
import {FormGroup} from '../formGroup/index.jsx';
import {TweetInput} from './tweetInput/index.jsx';
import {PostTweetButton} from './postTweetButton/index.jsx';
import {UserSearchService} from './userSearchService/index.js';
import {UserSelectionUtils} from './userSelectionUtils/index.jsx';

export class TwitterPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweet: '', tweetArray: [], userSuggestions: [], openAutoComplete: false};
        this.toggleAutoCompleteSelection = this.toggleAutoCompleteSelection.bind(this);
        this.handleSelectedItemSuggestion = this.handleSelectedItemSuggestion.bind(this);
        this.handleTweetInput = this.handleTweetInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.queryUsernameLookupService = this.queryUsernameLookupService.bind(this);
    }

    toggleAutoCompleteSelection(open){
        if(open){
            this.setState({
                openAutoComplete: true
            });
        }else{
            this.setState({
                openAutoComplete: false
            });
        }
    }
    
    handleSelectedItemSuggestion(chosenRequest, index){
        console.log('handleSelectedItemSuggestion', chosenRequest, index);
        //1. update tweet with username
        //2. mark tweetArray entry as resolved
        //3. see if there are any other unresolved usernames
    }

    handleTweetInput(tweetInput){
        let tweetArray = UserSelectionUtils.parseTweetForUserNames(tweetInput, this.state.tweetArray);
        console.log(`tweet: ${tweetInput}, tweetArray: ${tweetArray}`);
        this.setState({ tweet: tweetInput, tweetArray: tweetArray });
        let unResolvedUsername = UserSelectionUtils.getFirstUnResolvedUserName(tweetArray);
        if(unResolvedUsername){
            this.queryUsernameLookupService(unResolvedUsername.replace('@', ''));
        }
    }
    
    handleSubmit(event) {
        alert(`Tweet "${this.state.tweet}"was successfully posted.`);
        event.preventDefault();
    }
    
    queryUsernameLookupService(query){
        UserSearchService.queryUsername(query).done((data) => {
            if(data && data.hasOwnProperty('users')){
                let userSuggestions = UserSelectionUtils.mapRawUsersToListSuggestions(data.users);
                console.log("userSuggestions", userSuggestions);
                this.setState({ userSuggestions: userSuggestions, openAutoComplete: true});
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <TweetInput 
                            tweet={this.state.tweet} 
                            userSuggestions={this.state.userSuggestions}
                            onTweetInput={this.handleTweetInput}
                            openAutoComplete={this.state.openAutoComplete}/>
                        <PostTweetButton
                            onTouchTap={this.handleSubmit}/>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}
