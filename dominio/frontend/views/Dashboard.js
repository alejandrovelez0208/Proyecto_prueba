import { LitElement, html } from "lit-element";

class Dashboard extends LitElement {
  render() {
    return html` <h2 id="txt"></h2> `;
  }
}

customElements.define("dashboard", Dashboard);
