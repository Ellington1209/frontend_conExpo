
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height:40px ;
    display: flex;
    justify-content: center;

    button, a {
     background-color:${(props) => props.background};
     font-family: Roboto;
     font-size: 16px;
     font-weight: 700;
     line-height: 36px;
     color:${(props) => props.color};
     width: 100%;      
    }

    button:hover, a:hover{
      
       background-color: ${(props) => props.hover};
        
    }


`
