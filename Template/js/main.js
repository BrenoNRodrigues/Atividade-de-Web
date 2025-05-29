import navbar from './componentes/navbar.js';
import home from './componentes/pagehome.js';
import servicos from './componentes/pageservicos.js'
import contato from './componentes/pagecontato.js'
import foter from './componentes/foter.js'

navbar()
home()
foter()

window.addEventListener("hashchange", ()=> {
    switch(location.hash){
        case "#home":
            home()
        break
        case "#servicos":
            servicos()
        break
        case "#contato":
            contato()
        break

        
    }
})