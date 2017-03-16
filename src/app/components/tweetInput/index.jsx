import React from "react";
import AutoComplete from 'material-ui/AutoComplete';

export class TweetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweet: '', users: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        this.checkTweetForUserName = this.checkTweetForUserName.bind(this);
    }

    handleChange(event) {
        this.handleUpdateInput(event.target.value);
    }
    
    handleUpdateInput(value) {
        this.setState({
            tweet: value
        });
        this.checkTweetForUserName(value);
    }
    
    checkTweetForUserName(tweet){
        if(tweet && tweet.length > 0 && tweet.includes('@')){
            let tweetArray = tweet.split(' ');
            tweetArray.forEach((word) => {
                console.log('word: ', word);
                if(word.includes('@') && word.length > 2){
                    word = word.replace('@', '');
                    word = word.trim();
                    console.log("trimed word: ", word);
                    //this.queryUsernameLookup(word);
                }
            });
        }
    }

    render() {
        return (
            <AutoComplete 
                hintText="Tweet" 
                dataSource={this.state.users} 
                onUpdateInput={this.handleUpdateInput} 
                filter={AutoComplete.noFilter} 
                open={this.state.openAutoComplete} 
                floatingLabelText="Compose Tweet" 
                fullWidth={true}
            />
        );
    }
}