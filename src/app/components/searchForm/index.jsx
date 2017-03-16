import React from "react";
import $ from 'jquery';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const BASE_URL = '/twitter/user/search';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: '',
            users: [],
            openAutoComplete: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkTweetForUserName = this.checkTweetForUserName.bind(this);
        this.queryUsernameLookup = this.queryUsernameLookup.bind(this);
    }

    handleChange(event) {
        let tweet = event.target.value;
        console.log("tweet", tweet);
        this.setState({
            tweet: tweet
        });
        this.checkTweetForUserName(tweet);
    }
    
    handleUpdateInput(value) {
        this.setState({
            tweet: value
        });
        this.checkTweetForUserName(value);
        // this.setState({
        //     dataSource: [value, value + value, value + value + value,],
        // });
    };

    handleSubmit(event) {
        alert(`Your tweet was posted: ${this.state.tweet}`);
        event.preventDefault();
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
                    this.queryUsernameLookup(word);
                }
            });
        }
    }

    queryUsernameLookup(query) {
        let url = `${BASE_URL}?username=${query}`;
        $.ajax({
            url: url,
            dataType: 'json',
        }).done((data) => {
            console.log("data", data);
            if(data && data.hasOwnProperty('users')){
                let users = data.users.map((user) => {
                    return {
                        text: user.name,
                        value: (<MenuItem primaryText={user.name} secondaryText="&#9786;"/>)
                    };
                });
                console.log("users: ", users);
                this.setState({ users: users, openAutoComplete: true});
            }
        }).fail((jqXHR, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
    }

    render() {
        // let users = this.state.users;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" value={this.state.query} onChange={this.handleChange} placeholder="Tweet"/>
                        <span className="input-group-btn"> 
                            <button type="submit" className="btn btn-default">Post Tweet</button>
                        </span>
                    </div>
                    <AutoComplete
                        hintText="Tweet"
                        dataSource={this.state.users}
                        onUpdateInput={this.handleUpdateInput}
                        filter={AutoComplete.noFilter}
                        open={this.state.openAutoComplete}
                        floatingLabelText="Post Tweet"
                        fullWidth={true}
                    />
                </div>
            </form>
        );
    }
}

// <div className="row">
//     <ul>
//         {this.state.users.map((user) =>
//         <li key={user.name}>
//             <a href={user.name} target='_blank'>
//                 <img src={user.profile_image_url_https} alt="user-profile-image"/>
//                 {user.screen_name}
//             </a>
//         </li>
//         )}
//     </ul>
// </div>