import styled from 'styled-components';

export const StyledInput = styled.input`
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
  `;