import styled from 'styled-components';

export const EntryPage = styled.div`
  flex-direction: row;
  background-color: #fbfbfb;
`;

export const Header = styled.div`
  width: 100%;
  min-width:580px;
  height: 10%;
  background-color: #40c8f4;

  h1{
    padding: 15px;
    color: #FFFFFF;
    font-size: 25px;
    text-align: left;
    justify-content: center;
  }
`;

export const ContainerSubTitle = styled.div`

  width: 100%;
  min-width:500px;
  height: 10;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h2{
    padding: 15px;
    color: #999999;
    font-size: 25px;
    text-align: left;
    justify-content: center;
  }

`;

export const TitleRegistrations = styled.thead`
  
  width: 100vw;
  min-width: 500px;
  height: 8vh;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(153,153,153,0.7);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  th{
    color: #999999;
    font-size: 15px;
    text-align: left;
    justify-content: center;
  }

`;

export const List = styled.div`
  width: 100%;
  min-width:500px;
  height: 100%;

  #cadastros{
    text-align: center;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 3px solid #ddd;
    width: 100%;
  }

  #cadastros td, #cadastros th {
    border: 1px solid #ddd;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  #cadastros tr:nth-child(even){
    border-bottom: 1px solid rgba(153,153,153,0.7);
    background-color: #3333331A;
  }

  #cadastros th {
   padding-top: 12px;
   padding-bottom: 12px;
    text-align: center;
    background-color: #40C8F4;
    color: white;
  }
`;
