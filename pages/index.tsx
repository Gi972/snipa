import { Component } from "react";
import { Article } from "./catitem";
import { Navigation } from "./navigation";

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
