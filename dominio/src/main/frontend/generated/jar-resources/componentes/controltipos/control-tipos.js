import { LitElement, html, css } from "lit-element";
import "@vaadin/combo-box/vaadin-combo-box";
import { form_css } from "../css/form-css";

class ControlTipos extends LitElement {
  render() {
    return html`
      <div
        class="form-box form-label-${this.plabel} width-label-${this.wlabel}"
      >
        <div class="form-label">
          <label id="controlLabel">${this.customLabel}</label>
        </div>
        <div class="form-input">
          <vaadin-combo-box
            id="controlTipos"
            class="controlCombo"
          ></vaadin-combo-box>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.customLabel = "";
    this.plabel = "top";
    this.wlabel = "";
  }

  static get properties() {
    return {
      wlabel: { type: String },
      plabel: { type: String },
      customLabel: { type: String },
    };
  }

  static get styles() {
    return [form_css];
  }
}
customElements.define("control-tipos", ControlTipos);
