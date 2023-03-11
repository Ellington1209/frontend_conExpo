import styled from "styled-components";
import { grey, green } from "@mui/material/colors";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;

  .font {
    font-size: 25px;
    padding: 2px;
    width: 100%;
    margin-left: 10px;
  }
  .box1 {
    padding: 10px;
    width: 100%;
    min-height: fit-content;
  }
  .box2 {
    padding: 10px;
    height: auto;
    border: 1px solid ${grey[400]};
  }


  .box2 iframe {
    width: 100%;
    aspect-ratio: 16/9; /* proporção do vídeo */
    border: none;
  }
  .box3 {
    width: 50%;
    display: inline-block;
    padding: 15px;
    margin-top: 10px;
 
    flex-wrap: wrap;
  }
  .box4{
    
    padding: 10px;
    height: 270px;
    border: 1px solid ${grey[400]};
  
  }
  .accordion1 {
    background-color: ${grey[200]};
    padding: 10px;
    height: 50px;
  }
  .button {
    width: 100%;
    background-color: ${green[500]};
    font-size: 1.4rem;
  }
  .button1 {
    width: 100%;
    background-color: white;
    color: ${grey[800]};
    font-size: 1.4rem;
  }

  .boxButton {
    padding: 8px;
  }
  .boxButton1 {
  width: 50%;
  display: inline-block;
  padding: 10px;
  float: left;
}

  @media (max-width: 1350px) {
    .box3 {
      width: 100%;
      display: block;
      margin: 0;
    }
  }
`;
