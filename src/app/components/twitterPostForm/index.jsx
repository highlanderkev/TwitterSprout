import React from "react";
import {InputGroup} from '../inputGroup/index.jsx';
import {FormGroup} from '../formGroup/index.jsx';
import {TweetInput} from './tweetInput/index.jsx';
import {PostTweetButton} from './postTweetButton/index.jsx';
import {TweetCounter} from './tweetCounter/index.jsx';
import {UserSearchService} from './userSearchService/index.js';
import {UserSelectionUtils} from './userSelectionUtils/index.jsx';

export class TwitterPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweet: '', wordArray: [], userSuggestions: [], openAutoComplete: false};
        this.handleSelectedItemSuggestion = this.handleSelectedItemSuggestion.bind(this);
        this.handleTweetInput = this.handleTweetInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.queryUsernameLookupService = this.queryUsernameLookupService.bind(this);
    }
    
    handleSelectedItemSuggestion(selection, index){
        // no-op, case is already handled in handleTweetInput.
    }

    handleTweetInput(text, dataSource, params){
        let tweet = text;
        let wordArray = [];
        
        // when user types/inputs text
        if(params.source === "change"){
            wordArray = UserSelectionUtils.buildWordArray(tweet, this.state.wordArray);
        }
        
        // when user clicks/selects from autocomplete dropdown
        if(params.source === "touchTap"){
            wordArray = UserSelectionUtils.updateWordArrayWithSelection(tweet, this.state.wordArray);
            tweet = UserSelectionUtils.joinWords(wordArray);
        }
        
        this.setState({ 
            tweet: tweet,
            wordArray: wordArray 
        });
        
        let unresolvedUsername = UserSelectionUtils.getUnresolvedUsername(wordArray);
        if(unresolvedUsername){
            this.queryUsernameLookupService(unresolvedUsername.replace('@', ''));
        }else{
            this.setState({
                userSuggestions: [],
                openAutoComplete: false
            });
        }
        this.refs.tweetInput.focus();
    }
    
    handlePost(event) {
        alert(`Tweet "${this.state.tweet}" was successfully posted.`);
        event.preventDefault();
    }
    
    handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();
    }
    
    queryUsernameLookupService(query = ''){
        UserSearchService.queryUsername(query).done((data) => {
            if(data && data.hasOwnProperty('users')){
                let userSuggestions = UserSelectionUtils.mapRawUsersToListSuggestions(data.users);
                this.setState({ userSuggestions: userSuggestions, openAutoComplete: true });
            }else{
                this.setState({ userSuggestions: [], openAutoComplete: false });
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <TweetInput 
                            ref="tweetInput"
                            tweet={this.state.tweet} 
                            userSuggestions={this.state.userSuggestions}
                            onTweetInput={this.handleTweetInput}
                            onSelection={this.handleSelectedItemSuggestion}
                            openAutoComplete={this.state.openAutoComplete}/>
                        <PostTweetButton
                            onTouchTap={this.handlePost}
                            tweet={this.state.tweet}/>
                    </InputGroup>
                    <InputGroup>
                        <TweetCounter
                            tweet={this.state.tweet}/>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}
