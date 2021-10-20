import * as React from "react";
import { useAsync } from 'react-async-hook';
import { UserSearchService, helloWorld } from '../utils/userSearchService';
import { InputGroup } from './inputGroup';
import { FormGroup } from './formGroup';
import { TweetInput } from './tweetInput';
import { PostTweetButton } from './postTweetButton';
import { TweetCounter } from './tweetCounter';
import { UserSelectionUtils } from './userSelectionUtils';
import { HelloWorldComponent } from './helloWorld';

export interface TwitterPostFormState {
  tweet: string;
  wordArray: any[];
  userSuggestions: any[];
  openAutoComplete: boolean;
}

// export interface TwitterPostFormState extends TwitterPostFormProps {}

export class TwitterPostForm extends React.Component<{}, TwitterPostFormState> {
  constructor(props: any) {
    super(props);
    this.state = { tweet: '', wordArray: [], userSuggestions: [], openAutoComplete: false};
    this.handleSelectedItemSuggestion = this.handleSelectedItemSuggestion.bind(this);
    this.handleTweetInput = this.handleTweetInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.queryUsernameLookupService = this.queryUsernameLookupService.bind(this);
  }

  handleSelectedItemSuggestion(selection: any, index: any){
    // no-op, case is already handled in handleTweetInput.
  }

  handleTweetInput(text: string, dataSource: any, params: any){
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
      // this.refs.tweetInput.focus();
  }

  handlePost(event: Event) {
      alert(`Tweet "${this.state.tweet}" was successfully posted.`);
      event.preventDefault();
  }

  handleSubmit(event: any){
      event.preventDefault();
      event.stopPropagation();
  }

  queryUsernameLookupService(query = ''){
      UserSearchService.queryUsername(query).done((data: any) => {
          if(data && data.hasOwnProperty('users')){
              let userSuggestions = UserSelectionUtils.mapRawUsersToListSuggestions(data.users);
              this.setState({ userSuggestions: userSuggestions, openAutoComplete: true });
          }else{
              this.setState({ userSuggestions: [], openAutoComplete: false });
          }
      });
  }

  // componentDidMount(){
  //   this.renderHelloWorld();
  // }

  // renderHelloWorld = async() =>  {
  //   const result = await helloWorld();
  //   this.setState({
  //     tweet: result
  //   });
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup>
            {/* <TweetInput
                ref="tweetInput"
                tweet={this.state.tweet}
                userSuggestions={this.state.userSuggestions}
                onTweetInput={this.handleTweetInput}
                onSelection={this.handleSelectedItemSuggestion}
                openAutoComplete={this.state.openAutoComplete}/> */}
              <input type="text"/>
            <PostTweetButton
                // onTouchTap={this.handlePost}
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
