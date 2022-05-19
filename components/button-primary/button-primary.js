class ButtonPrimaryComponent extends HTMLElement {

  // Inidca el status del ShadowDom y variables a utilizar
  constructor() {
    super()
    this.text = '';
    this.attachShadow({ mode: 'open' })
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
        @import "./components/button-primary/button-primary.css";
      </style>

      <button>${this.text}</button>
    `;

    return template
  }

  // Pinta el componente
  connectedCallback() {
    this.render()
  }
  // Nos indica que atributos solo puede escuchar
  static get observedAttributes() {
    return ['text'];
  }
  // actualiza los valores de los atributos disponibles
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
  disconnectedCallback() {
    console.log("me voy");
  }
}

customElements.define('zinc-button-primary', ButtonPrimaryComponent);