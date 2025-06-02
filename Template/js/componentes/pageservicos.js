export default function servicos (){ 
    const main = document.getElementById("main")
 main.innerHTML = `
    <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Speeds up development</h5>

            <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">group</i></h2>
            <h5 class="center">User Experience Focused</h5>

            <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Easy to work with</h5>

            <section>
      <h2 class="section-title">Tubos de Papelão</h2>
      <p>Espessuras disponíveis:</p><ul><li>5mm / 0,5kg</li><li>10mm / 1,0kg</li><li>12mm / 1,2kg</li><li>15mm / 1,5kg</li><li>17mm / 1,7kg</li><li>20mm / 2,0kg</li></ul>
    </section>
          </div>
        </div>
      </div>

    </div>
  </div>
  ` }