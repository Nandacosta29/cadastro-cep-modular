export class Cadastro {
    constructor(nome, email, cep, rua, bairro, cidade, estado) {
      this.nome = nome;
      this.email = email;
      this.cep = cep;
      this.rua = rua;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
    }
  }
  export async function buscarEndereco(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) throw new Error("CEP não encontrado");
    return data;
  }
  
  export function salvarDados(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
  }
  
  export function carregarDados(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  import { Cadastro } from './classes.js';
  import { buscarEndereco, salvarDados, carregarDados } from './utils.js';
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
  
    const dadosSalvos = carregarDados('cadastro');
    if (dadosSalvos) {
      Object.entries(dadosSalvos).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input) input.value = value;
      });
    }
  
    document.getElementById('cep').addEventListener('blur', async () => {
      const cep = document.getElementById('cep').value;
      if (cep.length === 8) {
        try {
          const data = await buscarEndereco(cep);
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('estado').value = data.uf;
        } catch (err) {
          alert(err.message);
        }
      }
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const cadastro = new Cadastro(
        form.nome.value,
        form.email.value,
        form.cep.value,
        form.rua.value,
        form.bairro.value,
        form.cidade.value,
        form.estado.value
      );
  
      salvarDados('cadastro', cadastro);
      alert("Dados salvos com sucesso!");
    });
  });
      
        