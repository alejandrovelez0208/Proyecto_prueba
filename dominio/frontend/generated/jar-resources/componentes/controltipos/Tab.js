import { LitElement, html, css } from "lit-element";
import { TabStyle } from "../css/TabStyle";

class Tab extends LitElement {
  static get properties() {
    return {
      label: {},
      closable: {},
      active: {},
    };
  }

  constructor() {
    super();
    this.label = "";
    this.closable = false;
    this.active = true;
  }

  static get styles() {
    return [TabStyle];
  }

  render() {
    return html`
      <div class="tab ${this.active == "true" ? "tab-selected" : ""}">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    let _this = this;
    this.addEventListener("remove", function () {
      _this.remove();
    });
  }
  shouldUpdate(changedProperties) {
    return changedProperties;
  }
}

customElements.define("gc-tab", Tab);
