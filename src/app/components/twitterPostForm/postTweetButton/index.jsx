import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export class PostTweetButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group-btn">
                <RaisedButton 
                    label="Post"
                    type="submit"
                    onTouchTap={this.props.onTouchTap}
                    secondary={true}
                    icon={<FontIcon className=""/>}
                />
            </div>
        );
    }
}