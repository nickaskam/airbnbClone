import * as React from "react";
import { RegisterController } from "@airbnbclone/controller";

import { RegisterView } from "./view/RegisterView";

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <RegisterController />
        <RegisterView submit={this.dummySubmit} />
      </React.Fragment>
    );
  }
}
