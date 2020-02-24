import { Component } from "react";
import { Navigation } from "../atoms/navigation";
import { Sentences } from "../atoms/sentences";

export default class Catalog extends Component {
  render() {
    return (
      <>
        <Navigation>
          <Sentences />
        </Navigation>
      </>
    );
  }
}
