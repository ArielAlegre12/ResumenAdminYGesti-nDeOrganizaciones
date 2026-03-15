//creo mi pequeño nav
class MiNavBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav-principal">
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="primeraParte.html">1°Parte</a></li>
                <li><a href="segundaParte.html">2°Parte</a></li>
                <li><a href="#">3°Parte</a></li>
                <li><a href="#">4°Parte</a></li>
            </ul>
        </nav>
        `;
    }
}
//creo mi footer 
class miFooterBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer>
        <p>&copy; 2026 Resumen de Administración y Gestión de Organizaciones</p>
        <p>Desarrollado por Ariel </p>
        <a href="https://instagram.com/alegreariel666" target="_blank">
            <img src="img/instagram.ico" alt="Instagram">
        </a>

    </footer>
        `;
    }
}

customElements.define('mi-nav', MiNavBar);
customElements.define('mi-footer', miFooterBar);