import * as React from "react";
import { Accordion, Button, Divider, Typography, Box } from "@mui/material";
import { Check, Edit } from "@mui/icons-material";
import { Container } from "./styles";
import TypographyTwo from "../../atoms/typography/TypographyTwo";

const Evento = () => {
  return (
    <Container>
      <Box className="box1">
        <TypographyTwo>Transmissão do evento</TypographyTwo>
      </Box>
      <Divider />
      <Box className="box3">
        <Box className="box2">
          <Accordion className="accordion1">
            <Typography className="font" variant="h4">
              Pré-visualização
            </Typography>
          </Accordion>
          <br />
          <iframe
            title="Vídeo"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          ></iframe>
        </Box>
      </Box>
      <Box className="box3">
        <Box className="box4">
          <Accordion className="accordion1">
            <Typography className="font" variant="h4">
              Controles
            </Typography>
          </Accordion>
          <br />
          <Box className="boxButton">
            <Button
              className="button"
              variant="contained"
              startIcon={<Check />}
            >
              Publicar Transmissão
            </Button>
          </Box>
          <Box className="boxButton">
            <Button
              className="button1"
              variant="contained"
              startIcon={<Edit sx={{ color: "grey.800" }} />}
            >
              editar
            </Button>
          </Box>
          <Box className="boxButton1">
            <Button className="button1" variant="contained">
              pagina de Transmissão
            </Button>
          </Box>
          <Box className="boxButton1">
            <Button className="button1" variant="contained">
              ferramentas
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Evento;
