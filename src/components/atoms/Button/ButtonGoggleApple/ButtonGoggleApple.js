import React from "react";
import * as S from "./Style";
import Button from '@mui/material/Button';


const ButtonGoggleApple =({children}) =>{
    return (
        <S.Container>
            <Button className="ButtonGoggleApple" variant="outlined">{children}</Button>
        </S.Container>    
    )
}

export default ButtonGoggleApple;