import React from 'react';
import { StyledInputGroup } from './styles';

function InputGroup({ children }) {
  return (
    <StyledInputGroup>
      {children}
    </StyledInputGroup>
  );
}

export default InputGroup;