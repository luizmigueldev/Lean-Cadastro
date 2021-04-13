import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  
  //Esta função será acionada quando for submetido os dados do formulario para cadastro
  function handleSignUp(e) {
    e.preventDefault();
    const cad = { nome, email, cpf, telefone };
    cadastrando(cad);
    setNome("");
    setEmail("");
    setCpf("");
    setTelefone("");
  };

  //Aplica a formartação do numero do CPF, o input é alterado
  useEffect(() => {
    setCpf(formatedCpf(cpf));
  }, [cpf]);

  //Aplica a formartação do numero do telefon, o input é alterado
  useEffect(() => {
    setTelefone(formatedCel(telefone));
  }, [telefone]);

  //função para a formatação do CPF
  function formatedCpf(cpf) {
    //retira os caracteres indesejados...
    let formatedCpf = cpf.replace(/[^\d]/g, "");
    //realizar a formatação...
    return formatedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  //função para a formatação do telefone
  function formatedCel(telefone) {
    //retira os caracteres indesejados...
    let formatedCel = telefone.replace(/[^\d]/g, "");
    //realizar a formatação...
    return formatedCel.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  }

  return (
    <EntryPage>
      <Banner><img src={Img} /></Banner>
      <EntryCard>
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
            <Input type="text" id="cpf" maxlength="14" value={cpf} onChange={e => setCpf(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <label htmlFor="telefone">Telefone</label>
            <Input type="tel" id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
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