export default function contato(){
    const main = document.getElementById("main")
    main.innerHTML = `
    
    <section>
    <div class="container">
    <div class="section">
    <div>
      <h2 class="section-title">Fale Conosco</h2>
      <p>Estamos localizados na Rua Parintins, 400, Jardim Helena, São Paulo - SP.</p><div><strong>Whatsapp:</strong> (11) 9 6624-0118</div>
      <div id="map"></div>
    </section>
    </div>
  </div>
    `
    var map = L.map('map').setView([-23.52675586795283, -46.483551459266394],15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 20,
attribution: '&copy: <a href="http://www.openstreetmap.org/copyright">OpenSteetMap</a>'
}).addTo(map);
var marker = L.marker([-23.52675586795283, -46.483551459266394]).addTo(map);

}
