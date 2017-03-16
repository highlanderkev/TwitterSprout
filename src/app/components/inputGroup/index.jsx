import React from "react";

export class InputGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="input-group input-group-lg">
                {this.props.children}
            </div>
        );
    }
}