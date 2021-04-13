import styled from 'styled-components';

export const EntryPage = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
  background-color: #fbfbfb;
`;

export const Banner = styled.div`
  height:100vh;
  flex: 1;
  background-color: #40c8f4;

  img {
    opacity: 0.3;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
   
  a{
    margin-left: 15px;
  } 

  .link{
    font-size: 14px;
    color: #999999;
  }
`;









