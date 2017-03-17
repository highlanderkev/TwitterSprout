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
        this.handleNewRequest = this.handleNewRequest.bind(this);
    }
    
    handleUpdateInput(value) {
        this.props.onTweetInput(value);
    }
    
    handleNewRequest(chosenRequest, index){
        console.log("NewRequest", chosenRequest, index);
        //this.props.
    }

    render() {
        return (
            <AutoComplete 
                hintText="Tweet" 
                dataSource={this.props.userSuggestions}
                dataSourceConfig={DATA_SOURCE_CONFIG}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
                filter={AutoComplete.noFilter} 
                open={this.props.openAutoComplete} 
                floatingLabelText="Compose Tweet" 
                fullWidth={true}
            />
        );
    }
}