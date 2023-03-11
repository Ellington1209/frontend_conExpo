


import React from "react";
import * as S from "./Style";
import { Typography } from "@mui/material";




const TypographyTwo = ({ children}) => {
    return (
      <S.Container  >
        <Typography   variant="h2"   >
          {children}
        </Typography>
      </S.Container>
    );
  };
export default TypographyTwo;