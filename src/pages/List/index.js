import React, { Fragment, useState, useEffect } from 'react';

import { ContainerSubTitle, Header, EntryPage, TitleRegistrations, BodyRegistrations, List } from './style';
import Button from '../../components/Button';
import ButtonRemove from '../../components/ButtonRemove';


export default function Listar() {
  const [cadastros, setCadastros] = useState([]);

  // Essa função useEffect carrega os dados de cadastro assim que a pagina é criada.
  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("cadastro")) || [];
    array && setCadastros(array);
    console.log(array);
  }, []);

  // Essa função esta renderizando na tela, as linhas com as informações do cadastro
  function renderTableData() {
    return cadastros.map((item, index) => (
      <tr key={index}>
        <td>{item.nome}</td>
        <td>{item.email}</td>
        <td>{item.cpf}</td>
        <td>{item.telefone}</td>
        <td><ButtonRemove onClick={() => remove(index)}>Remover</ButtonRemove></td>
      </tr>
    ))
  }

  //Essa função é responsavel pela designação do cabeçalho da tabela que remete os dados cadastrados.
  function renderTableHeadler() {
    let header = ["nome", "email", "cpf", "telefone", "ação"];
    return header.map((item, index) => {
      return <th key={index}>{item.toUpperCase()}</th>
    })
  }

  //Essa função é responsavel pela remoção dos dados cadastrados do LocalStorage
  function remove(index) {
    const array = cadastros.filter((cad, i) => index !== i && cad)
    setCadastros(array)
    localStorage.setItem("cadastro", JSON.stringify(array));
  }

  return (
    <EntryPage>
      <Header>
        <h1>Lean Cadastro</h1>
      </Header>
      <ContainerSubTitle>
        <h2>Lista de Cadastro</h2>
      </ContainerSubTitle>
      <List>
        <table id="cadastros">
          <tbody>
            <tr>{renderTableHeadler()} </tr>
            {renderTableData()}
          </tbody>
        </table>
      </List>
    </EntryPage>
  );

};
