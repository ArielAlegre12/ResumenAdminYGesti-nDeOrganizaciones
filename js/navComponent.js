class MiNav extends HTMLElement{
    connectedCallBack(){
        this.innerHTML = `
        <nav>
        <a href="#">Inicio</a>
        <a href="primeraParte.html">1ra Parte</a>`;
    }
}
customElements.define('mi-nav', MiNav);