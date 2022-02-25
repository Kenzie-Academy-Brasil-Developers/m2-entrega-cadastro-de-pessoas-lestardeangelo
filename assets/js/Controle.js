import Pessoa from "../../models/RegistroPessoas.js";
import {db} from "../../db/db.js"

const totalAlunos = document.getElementById('total-alunos')
let contador = 0

class Controlepessoa {
    static cadastrarPessoa(pessoa){

        const novoCadastro = new Pessoa (...pessoa)
        db.push(novoCadastro)
        
        contador += 1
        totalAlunos.textContent =  contador
         
        return db.pessoas

    }
}

export {Controlepessoa}