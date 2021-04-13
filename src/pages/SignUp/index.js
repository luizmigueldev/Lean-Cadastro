import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask"

import { EntryPage, Banner, ContainerButton } from './style';
import Button from '../../components/Button'
import Input from '../../components/Input'
import EntryCard from '../../components/EntryCard'
import InputGroup from '../../components/InputGroup'
import Img from '../../assets/img.jpg'


export default function SignUp() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cadastro, setCadastro] = useState([]);

  // Essa função useEffect carrega os dados de cadastro assim que a pagina é criada.
  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("cadastro")) || [];
    if (array !== null) {
      setCadastro(array);
    }
  }, []);

  //Essa função utilizo para persistir os dados no LocalStorege
  function cadastrando(cad) {
    cadastro.push(cad)
    localStorage.setItem("cadastro", JSON.stringify(cadastro));
  };

  //Esta função fará a verificação de peenchimento do formulario
  function validaCampos({ nome = "", email = "", cpf = "", telefone = "" }) {
    let mensagem = "";
    if (!nome) mensagem += "Nome Obrigatorio \n"
    if (!email) mensagem += "E-mail Obrigatorio \n"
    if (!cpf) {
      mensagem += "CPF Obrigatorio \n"
    } else {
      !validaCpf(cpf) && (mensagem += "CPF Invalido \n")
    }
    if (!telefone) mensagem += "Telefone Obrigatorio \n"

    return mensagem;
  }

  //Esta função será acionada quando for submetido os dados do formulario para cadastro
  //nesta função tambem é feita a chamada para validações de preenchimento do fomulario
  function handleSignUp(e) {
    e.preventDefault();

    const cad = { nome, email, cpf, telefone };
    const mensagem = validaCampos(cad);
    if (!mensagem) {
      alert("Usuario cadastrado com sucesso!");
      cadastrando(cad);
      setNome("");
      setEmail("");
      setCpf("");
      setTelefone("");
    } else {
      alert(mensagem);
    }
  };

  //função que fará a validação do CPF
  function validaCpf(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9, 10].forEach(function (j) {
      var soma = 0, r;
      cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
        soma += parseInt(e) * ((j + 2) - (i + 1));
      });
      r = soma % 11;
      r = (r < 2) ? 0 : 11 - r;
      if (r != cpf.substring(j, j + 1)) result = false;
    });
    return result;
  }

  return (
    <EntryPage >
      <Banner ><img src={Img} /></Banner>
      <EntryCard class="entryCard">
        <h2>Lean Cadastro</h2>
        <form onSubmit={handleSignUp}>
          <InputGroup>
            <label htmlFor="nome">Nome Completo</label>
            <Input type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <InputMask class="inputMask" mask="999.999.999-99" type="text" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <label htmlFor="telefone">Telefone</label>
            <InputMask class="inputMask" mask="(99) 99999-9999" type="text" id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
          </InputGroup>
          <ContainerButton>
            <Button full={true} >Cadastrar</Button>
            <Link to="/List" class="link" >Login →</Link>
          </ContainerButton>
        </form>
      </EntryCard >
    </EntryPage>
  );
}