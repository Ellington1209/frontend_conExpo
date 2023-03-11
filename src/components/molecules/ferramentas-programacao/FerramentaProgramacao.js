import * as React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Add, DateRange } from "@mui/icons-material";
import TypographyFerramentas from "../../atoms/typography/TypographyTwo";

const FerramentaPrograma = () => {
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const [age, setAge] = React.useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Grid
      size="small"
      component={Paper}  container
      spacing={2}
      columns={{ xs: 12, sm: 12, md: 12 }}
      justifyContent="center"
      alignItems="center"
      paddingBottom={3}
      sx={{ width: "100%" }}
    >
      <Grid item xs={12}  sm={6} md={4} >
        <TypographyFerramentas>Atividades</TypographyFerramentas>
      </Grid>
      <Grid container item xs={12} sm={8} md={6} spacing={1} >
        <Grid item xs={12}  sm={6} md={5} lg={3} xl={1} padding={1}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            size="medium"
            sx={{ width: "90%" }}
          >
            <MenuItem value={1}>Todas as atividades</MenuItem>
            <MenuItem value={2}>Atividades com inscrição</MenuItem>
            <MenuItem value={3}>Atividades sem inscrição</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}  sm={6} md={5} lg={3} xl={1}>
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                label="buscar"
                variant="outlined"
                size="medium"
                sx={{ width: "90%" }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}  sm={6} md={5} lg={3} xl={1}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<DateRange />}
            sx={{
              borderColor: "#BFBFBF",
              color: "#4F4F4F",
              width: "90%",
            }}
            onClick={handleOpen}
          >
            Agenda
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Grid>
        <Grid item xs={12}  sm={6} md={5} lg={3} xl={1}>
          <Button
            sx={{
              minWidth: "200px",
              mb: { xs: 1, md: 0 },
              mr: { xs: 0, md: 1 },
            }}
            variant="contained"
            size="large"
            startIcon={<Add />}
          >
            Adicionar atividade
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FerramentaPrograma;
