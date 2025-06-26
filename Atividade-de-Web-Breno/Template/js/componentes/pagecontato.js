export default function contato(){
    const main = document.getElementById("main")
    main.innerHTML = `
    
    <article class="phonex">
    <h1 class="midle-title">Nos
    Contate</h1>
    <div class="icon-contact">
       <img class=icon-big src="/Template/instagram.png" alt="instagram">
      <img class=icon-big src="/Template/Gmail_icon_(2020).svg.png" alt="Gmail_icon_">
      <img class=icon-big src="/Template/WhatsApp.svg.webp" alt="WhatsApp">
    </article>
    </section>
    <div id=center-itens>
      <p>Estamos localizados na Rua Parintins, 400, Jardim Helena, São Paulo - SP.</p><div><strong>Whatsapp:</strong> (11) 9 6624-0118</div> 
    </div>
    <div id="map"></div>
    `
    var map = L.map('map').setView([-23.52675586795283, -46.483551459266394],15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 20,
attribution: '&copy: <a href="http://www.openstreetmap.org/copyright">OpenSteetMap</a>'
}).addTo(map);
var marker = L.marker([-23.52675586795283, -46.483551459266394]).addTo(map);

}
