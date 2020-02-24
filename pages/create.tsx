import { Component } from "react";
import { Navigation } from "../atoms/navigation";
import { Formulaire } from "../atoms/form";

export default class Create extends Component {
  render() {
    return (
      <>
        <Navigation>
          <Formulaire />
        </Navigation>
      </>
    );
  }
}
