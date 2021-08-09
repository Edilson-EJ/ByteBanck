import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 262728732);
const gerente =  new Gerente("Ricardo", 5000, 1987181891);

diretor.cadastraSenha("123456");
gerente.cadastraSenha("123");

const cliente = new Cliente("lais",297347384,"456");


const gerenteestalogado = SistemaAutenticacao.login(gerente, "123");
const diretorestalogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");

console.log(gerenteestalogado);
console.log(diretorestalogado);
console.log(clienteEstaLogado);