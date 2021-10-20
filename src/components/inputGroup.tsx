import * as React from "react";

export interface InputGroupProps {
  children: any;
}

export class InputGroup extends React.Component<InputGroupProps, {}> {
  constructor(props: InputGroupProps) {
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
