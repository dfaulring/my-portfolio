/* TestComponent */
class TestComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get observedAttributes() {
    return ['name']
  }

  connectedCallback() {
    this.shadowRoot.textContent = `Hello ${this.name}!`;
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) {
      return
    }

    this[property] = newValue;
  }
}

customElements.define('test-component', TestComponent)
/* End TestComponent */
