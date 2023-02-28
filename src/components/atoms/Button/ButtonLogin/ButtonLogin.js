import React from "react";
import * as S from "./Style";

import Button from '@mui/material/Button';


const ButtonLogin = ({ children, background, href, hover, color, onClick }) => {
    return (
      <S.Container background={background} hover={hover} color={color}>
        <Button href={href} variant="contained" onClick={onClick}>
          {children}
        </Button>
      </S.Container>
    );
  };
export default ButtonLogin;