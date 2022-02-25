import {Quadro} from "../../models/Quadro.js"
import {Pesquisa} from "../../models/Pesquisa.js"

const botaoCadastrar = document.querySelector('body')
const pesquisarBtn = document.getElementById('btn')

botaoCadastrar.addEventListener('submit', Quadro.capturarDados.bind(Quadro))

pesquisarBtn.addEventListener('click', Pesquisa.filtrando)