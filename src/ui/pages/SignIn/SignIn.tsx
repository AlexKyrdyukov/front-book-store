import React from 'react';
import { StyledSignInPage } from './SignnIn.styled';

type PropsType = {
  value?: string;
};

const SignIn: React.FC<PropsType> = () => {
  return (
    <StyledSignInPage>
      SignIn
    </StyledSignInPage>
  );
};

export default SignIn;
