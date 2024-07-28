import { css } from "lit-element";

export const form_css = css`
  .form-box {
    display: flex;
  }

  .form-label {
    font-weight: 500;
    white-space: nowrap;
    margin-bottom: 7px;
  }

  .form-label-top {
    flex-direction: column;
  }

  .form-label-left {
    flex-direction: row;
    align-items: end;
  }

  .width-label-130 > .form-label {
    width: 130px;
  }

  .width-label-140 > .form-label {
    width: 140px;
  }

  .width-label-150 > .form-label {
    width: 150px;
  }

  .width-label-160 > .form-label {
    width: 160px;
  }

  .width-label-180 > .form-label {
    width: 180px;
  }

  .form-input {
    flex: 2;
    min-width: 50px;
    width: 100%;
  }

  :host {
    display: block;
    width: 100%;
  }
  #controlTipos {
    flex-grow: 1;
    min-width: 100px;
    width: 100%;
    background-color: white;
    padding: 5px;
  }
`;
