var map = L.map('map').setView([51.505, -0.09],15);
L.titleLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 16,
attribution: '&copy: <a href="http://www.openstreetmap.org/copyright">OpenSteetMap</a>'
}).addTo(map);
var marker = L.marker([51.505, -0.09]).addTo(map);