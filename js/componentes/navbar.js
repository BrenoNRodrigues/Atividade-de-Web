export default function navbar (){
    const nav = document.getElementById("navbar")
nav.innerHTML = ` <nav class="greeneco" role="navigation">
<div class="nav-wrapper container">
  <a id="logo-container" href="/EcoTubosLogotipo.png" class="brand-logo"><img src="/EcoTubosLogotipo.png" alt="EcoTubosLogotipo"></a>
  <ul class="right hide-on-med-and-down">
    <li><a href="#home">Produtos</a></li>
    <li><a href="#servicos">Serviços</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#sobrenos">Sobre Nos</a><li>
  </ul>

  <ul id="nav-mobile" class="sidenav">
    <li><a href="#index">Produtos</a></li>
    <li><a href="#servicos">Serviços</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#sobrenos">Sobre Nos</a></li>
  </ul>
  <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
</div>
</nav>
`
}