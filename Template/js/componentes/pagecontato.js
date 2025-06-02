import formulario from "./form.js"
export default function contato(){
    const main = document.getElementById("main")
    main.innerHTML = `
    <div class="container">
    <div class="section">
    <div>
     <h2 class="section-title">Fale Conosco</h2>
      <p>Estamos localizados na Rua Parintins, 400, Jardim Helena, São Paulo - SP.</p><div><strong>Whatsapp:</strong> (11) 9 6624-0118</div>
    </section>
      ${ formulario() }
    </div>
  </div>
    `
}