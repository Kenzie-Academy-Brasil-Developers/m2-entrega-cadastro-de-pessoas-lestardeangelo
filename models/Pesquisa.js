import {db} from "../db/db.js"

const valores = document.getElementById('cargoOption')
const listaContainer = document.getElementById('lista-de-alunos')

let retorno = []

class Pesquisa {

    static filtrando() {
        retorno = []
        listaContainer.innerHTML = ''

        for (let i = 0; i < db.length; i++) {
            if (db[i]._cargo === valores.value) {
                retorno.push(db[i])
                console.log(retorno)
            }else if(valores.value === 'Todos'){
                retorno.push(db[i])
            }
        }
        
        for (let j = 0; j < retorno.length; j++) {
            const {
                _nome,
                _sobrenome,
                _dataNascimento,
                _email,
                _contato,
                _telefone,
                _cargo
            } = retorno[j]

            let final = `${_nome} ${_sobrenome} ${_dataNascimento} ${_email} ${_contato} ${_telefone} ${_cargo}`
            let criandoLi = document.createElement('li')
            criandoLi.textContent = final
            listaContainer.appendChild(criandoLi)

        }
    }
}

Pesquisa.filtrando()
export {Pesquisa}