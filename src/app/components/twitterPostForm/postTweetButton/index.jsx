import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const STYLE = {
    button: {
        margin: 12
    },
    icon: {
        top: "-4px"
    },
    inputGroup: {
        top: "8px"
    }
};

export class PostTweetButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    isValid(){
        return this.props.tweet.length < 141 && this.props.tweet.length > 0;
    }

    render() {
        let isValid = this.isValid();
        return (
            <div className="input-group-btn" style={STYLE.inputGroup}>
                <RaisedButton 
                    label="Post"
                    type="submit"
                    onTouchTap={this.props.onTouchTap}
                    primary={true}
                    disabled={!isValid}
                    style={STYLE.button}
                    icon={<FontIcon className="fa fa-twitter-square" style={STYLE.icon}/>}
                />
            </div>
        );
    }
}