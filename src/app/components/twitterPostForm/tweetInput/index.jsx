import React from "react";
import AutoComplete from 'material-ui/AutoComplete';

export const DATA_SOURCE_CONFIG = {
  text: 'text',
  value: 'value',
};

export class TweetInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.focus = this.focus.bind(this);
    }
    
    handleUpdateInput(text, dataSource, params) {
        this.props.onTweetInput(text, dataSource, params);
    }
    
    handleSelection(selection, index){
        this.props.onSelection(selection, index);
    }
    
    focus(){
       this.refs.autoComplete.focus(); 
    }

    render() {
        return (
            <AutoComplete 
                ref="autoComplete"
                hintText="Tweet" 
                searchText={this.props.tweet}
                dataSource={this.props.userSuggestions}
                dataSourceConfig={DATA_SOURCE_CONFIG}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleSelection}
                filter={AutoComplete.noFilter} 
                open={this.props.openAutoComplete} 
                floatingLabelText="Compose Tweet" 
                fullWidth={true}
            />
        );
    }
}