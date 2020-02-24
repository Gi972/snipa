import { Component } from "react";
import { Navigation } from "./navigation";

export const Formulaire = () => {
  return (
    <form>
      <div>
        <label>Anglais</label>
        <input type="text" />
      </div>
      <div>
        <label>Francais</label>
        <input type="text" />
      </div>
      <button>Enregistrer</button>
    </form>
  );
};

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
