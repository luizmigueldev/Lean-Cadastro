import React from 'react';
import { StyledButtonRemove } from './styles';

function ButtonRemove({ children, ...props }) {
  return (
    <StyledButtonRemove {...props}>
      {children}
    </StyledButtonRemove>
  );
};

export default ButtonRemove;