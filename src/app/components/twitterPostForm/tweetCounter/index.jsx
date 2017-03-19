import React from 'react';
import Badge from 'material-ui/Badge';

export class TweetCounter extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <Badge
                    badgeContent={this.props.tweet.length - 140}
                    primary={true}>
                </Badge>
            </div>
        );
    }
}