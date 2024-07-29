import { LitElement, html } from "lit-element";
/*import "./componentes/controltipos/control-tipos.js";*/

class AgregarView extends LitElement {
  render() {
    return html`
    <h5 id="txt"></h5>
<!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<div class="container">
  <div class="row">
    
    <div class="col-md-5">
      <control-tipos id="tipo" customLabel="Tipos de Targetas" wlabel="140" plabel="left"></control-tipos>
    </div>
    <div class="col-md-6">
      <control-tipos id="tipo" customLabel="Tipos de Garantias" wlabel="140" plabel="left"></control-tipos>
    </div>
  </div>
</div>-->
`;
  }

}

customElements.define("agregar-view", AgregarView);