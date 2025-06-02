export default function footer (){
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <footer class="VerdeFooter page-footer"> 
    <div class="container">
      <div class="row">
        <div class="col s12 m6 footer-email">
          <h6>Emails</h6>
          <p>vendas.ecotubos001@gmail.com</p>
          <p>vendas.ecotubos002@gmail.com</p>
          <p>compras.ecotubos01@gmail.com</p>
        </div>
        <div class="col s12 m6 footer-contact">
          <h6>Contatos</h6>
          <p>Fábio Pirozeli: (11) 9 6624-0118</p>
          <p>Paula: (11) 9 1640-0779</p>
          <p>Sheila: (11) 9 7352-9553</p>
          <p>Mariana: (11) 9 7596-0393</p>
  </footer>
    `
}