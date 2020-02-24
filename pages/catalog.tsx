import { Component } from "react";
import { Navigation } from "./navigation";

export const Sentences = ({ sentences = [] }: { sentences?: string[] }) => {
  const sentence = (sentence, index) => <li key={index}>{sentence}</li>;
  return <ul>{sentences.map(sentence)}</ul>;
};

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
