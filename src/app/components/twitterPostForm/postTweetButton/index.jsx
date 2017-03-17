import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

export class PostTweetButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group-btn">
                <RaisedButton 
                    type="submit" 
                    label="Post"
                    onTouchTap={this.props.onTouchTap}
                />
            </div>
        );
    }
}