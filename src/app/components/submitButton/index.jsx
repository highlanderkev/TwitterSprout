import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

export class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="input-group-btn">
                <RaisedButton 
                    type="submit" 
                    label="Post"
                />
            </div>
        );
    }
}