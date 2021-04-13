import styled from 'styled-components';

export const StyledEntryCard = styled.div`

  width: 30%;
  height: 100%;
  border-radius: 5px;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0, 0.1), 0 1px 2px 0 rgba(0,0,0, 0.06);
  text-align: center;
  display: inline-block;

  @media(max-width: 700px){
    padding: 40px;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  h2{
    text-align: left;
    font-weight: 500;
    margin-bottom: 50px;
    color: #999999;
  }
`;