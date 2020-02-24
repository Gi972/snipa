import { Component } from "react";
import { Article } from "../atoms/catitem";
import { Navigation } from "../atoms/navigation";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navigation>
          <Article />
        </Navigation>
      </>
    );
  }
}
