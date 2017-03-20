import React from 'react';
import Badge from 'material-ui/Badge';
import FontIcon from 'material-ui/FontIcon';

export class TweetCounter extends React.Component {
    constructor(props){
        super(props);
        this.badgeValid = this.badgeValid.bind(this);
    }
    
    badgeValid(){
        return this.props.tweet.length < 141;
    }
    
    render(){
        let badgeValid = this.badgeValid();
        return (
            <div>
                <Badge
                    badgeContent={140 - this.props.tweet.length}
                    primary={badgeValid}
                    secondary={!badgeValid}>
                    <FontIcon
                        className="fa fa-twitter"/>
                </Badge>
            </div>
        );
    }
}