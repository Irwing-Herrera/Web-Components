class CardItemComponent extends HTMLElement {
  // Inidca el status del ShadowDom y variables a utilizar
  constructor() {
    super();
    this.isNewProduct = false;
    this.image = '';
    this.title = '';
    this.price = '$0.0';
    this.description = '';
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @import "./components/card-item/card-item.css";
      </style>

      <main>
        <div class="container">
          <div class="header">
            <div class="is-new-product">
              <span class="text-new-product">Nuevo</span>
            </div>
            <img class="article" src=${this.image} alt="silla gamer" />
          </div>
          <div class="information">
            <div class="container-information">
              <span class="title">${this.title}</span>
              <span class="price">${this.price}</span>
            </div>
            <span class="description">${this.description}</span>
          </div>
          <div class="add-item">
            <span class="icon">+</span>
          </div>
        </div>
      </main>
   `;

    return template;
  }

  // Pinta el componente
  connectedCallback() {
    this.render();
  }
  // Nos indica que atributos solo puede escuchar
  static get observedAttributes() {
    return ["isNewProduct","image","title","price","description"];
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

customElements.define("zinc-card-item", CardItemComponent);
