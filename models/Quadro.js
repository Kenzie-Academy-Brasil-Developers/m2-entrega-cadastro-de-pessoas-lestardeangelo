import {Controlepessoa} from "../assets/js/Controle.js"
import {db} from "../db/db.js"

const listaContainer = document.getElementById('lista-de-alunos')

let pessoasCriadas = []

class Quadro {

    static capturarDados(event) {

        event.preventDefault()

        const imputs = event.target
        pessoasCriadas = []

        for (let i = 0; i < imputs.length; i++) {
            const {value} = imputs[i]

            pessoasCriadas.push(value)
        }

        let verifica = db.some(pessoa => Object.values(pessoa).includes(pessoasCriadas[3]))
        
        if (verifica) {

            alert("E-mail já cadastrado! Por favor insira outro e-mail.")

        } else {
            
            let criandoLi = document.createElement('li')
            criandoLi.textContent = pessoasCriadas.join(' ')
            listaContainer.appendChild(criandoLi)

            Controlepessoa.cadastrarPessoa(pessoasCriadas)
        }
            
    }
    
}
export {Quadro}