import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 180px;
  max-height: 35px;
  border: 0;
  border-radius: 20px;
  padding: 8px 16px;
  outline: none;
  background-color: ${props => props.disabled ? '#f6f6f6' : '#40c8f4'};
  color: ${props => props.disabled ? '#dddcdc' : '#ffffff'};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${props => props.disabled ? null : '#40c8f4b3'};
    }
`;