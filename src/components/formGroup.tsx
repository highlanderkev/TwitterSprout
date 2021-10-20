import * as React from "react";

export interface FormGroupProps {
  children: any;
}

export class FormGroup extends React.Component<FormGroupProps, {}> {
  constructor(props: FormGroupProps) {
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


// export function FormGroup (WrappedComponent: React.ComponentClass) {
//   return class extends React.Component {
//     render() {
//       return (
//         <div className="form-group">
//           <WrappedComponent {...this.props} />
//         </div>
//       );
//     }
//   }
// }
