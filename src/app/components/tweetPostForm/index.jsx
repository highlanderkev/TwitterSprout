import React from "react";

export class TweetPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweet: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(`Tweet was successfully posted.`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.children}
            </form>
        );
    }
}
