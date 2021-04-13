import styled from 'styled-components';

export const EntryPage = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  min-width: 50px;
  min-height: 568px;
  background-color: #fbfbfb;

  @media(max-width: 700px){
    flex-direction: column;
    position: relative;

  }

  .inputMask{
    width: 100%auto;
    outline: none;
    padding: 8px 16px;
    border: 0;
    border-bottom: 2px solid #dbdbdb; 
    font-size: 12;
    color: #efeeed;
    &:focus{
      color: #555555;
    };
    transition: box-shadow 0.2s;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 100% ;
  min-width: 300px;
  background-color: #40c8f4;

  img {
    opacity: 0.3;
    width: 100%;
    height: 100% 
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









