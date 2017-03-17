import React from "react";

export class InputGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group input-group-lg">
                {this.props.children}
            </div>
        );
    }
}