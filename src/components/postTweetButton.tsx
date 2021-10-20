import * as React from "react";
import { Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';

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

export interface PostTweetButtonProps {
  tweet: string;
}

export class PostTweetButton extends React.Component<PostTweetButtonProps, {}> {
  constructor(props: PostTweetButtonProps) {
    super(props);
  }

  isValid(){
    return this.props.tweet.length < 141 && this.props.tweet.length > 0;
  }

  render() {
    let isValid = this.isValid();
    return (
      <div className="input-group-btn" style={STYLE.inputGroup}>
        <Button
            variant="contained"
            disabled={!isValid}
            startIcon={<Icon className="fa fa-twitter-square" style={STYLE.icon}/>}>
          Post
        </Button>
      </div>
    );
  }
}
