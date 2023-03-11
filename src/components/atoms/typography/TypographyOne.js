import React from "react";
import * as S from "./Style";
import { Typography } from "@mui/material";



const TypographyOne = ({ children}) => {
    return (
      <S.Container  >
        <Typography   variant="h1"   >
          {children}
        </Typography>
      </S.Container>
    );
  };
export default TypographyOne;