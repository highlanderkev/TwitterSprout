import * as React from "react";
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export const DATA_SOURCE_CONFIG = {
  text: 'text',
  value: 'value',
};

export interface TweetInputProps {
  tweet: string;
  userSuggestions: any[];
  openAutoComplete: any;
  onTweetInput: any;
  onSelection: any;
}

class TweetInput extends React.Component<TweetInputProps, {}> {
  constructor(props: TweetInputProps) {
    super(props);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.focus = this.focus.bind(this);
  }

  handleUpdateInput(text: string, dataSource: any, params: any) {
    this.props.onTweetInput(text, dataSource, params);
  }

  handleSelection(selection: any, index: any){
    this.props.onSelection(selection, index);
  }

  focus(){
    // this.refs.autocomplete.focus();
  }

  render() {
    return (
      <Autocomplete
        options={this.props.userSuggestions}
        filterSelectedOptions={false}
        open={this.props.openAutoComplete}
        renderInput={params => <TextField {...params} label="Tweet" variant="outlined" />}
      />
    );
  }
}

export default connect()();
