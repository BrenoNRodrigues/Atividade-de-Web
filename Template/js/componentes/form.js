export default function formulario(){
    let formulario = ""
    formulario.innerHTML = `
    <form> 
        <label for="nome">Nome</label>
        <input type="text" id= nome>
        <label for="assunto">Assunto</label>
        <input type="text" id= assunto>
        <label for="texto"></label>
        <textarea id="texto" cols="30" rows="5"></textarea>
        <button>Enviar</button>
    </form>
    `
    return formulario
}
