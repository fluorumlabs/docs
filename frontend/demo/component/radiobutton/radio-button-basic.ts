import '../../init'; // hidden-full-source-line

import { html, LitElement, customElement } from 'lit-element';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';

// tag::snippet[]
@customElement('radio-button-basic')
export class RadioButtonBasic extends LitElement {

  render() {
    return html`
      <vaadin-radio-group
        label="Travel Class"
        theme="vertical"
      >
        <vaadin-radio-button value="economy">Economy</vaadin-radio-button>
        <vaadin-radio-button value="business">Business</vaadin-radio-button>
        <vaadin-radio-button value="firstClass">First Class</vaadin-radio-button>
      </vaadin-radio-group>
    `;
  }
}
// end::snippet[]