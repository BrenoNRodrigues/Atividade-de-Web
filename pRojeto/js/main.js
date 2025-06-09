import navbar from './componentes/navbar.js';
import home from './componentes/pagehome.js';
import servicos from './componentes/pageservicos.js'
import contato from './componentes/pagecontato.js'
import footer from './componentes/footer.js'
import sobrenos from './componentes/sobrenos.js';

navbar()
home()
footer()

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
        case "#sobrenos":
            sobrenos()
        break

        
    }
})

