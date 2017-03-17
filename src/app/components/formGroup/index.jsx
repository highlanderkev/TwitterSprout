import React from "react";

export class FormGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                {this.props.children}
            </div>
        );
    }
}