import * as React from 'react';
import { Badge } from '@material-ui/core';
import { Icon } from '@material-ui/core';

export interface TweetCounterProps {
  tweet: string;
}

export class TweetCounter extends React.Component<TweetCounterProps, {}> {
    constructor(props: TweetCounterProps){
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
                    color={badgeValid ? 'primary' : 'secondary'}>
                    <Icon
                        className="fa fa-twitter"/>
                </Badge>
            </div>
        );
    }
}
