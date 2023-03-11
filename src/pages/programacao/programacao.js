import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Grid } from "@mui/material";
import ProgramacaoAtividade from "../../components/organismos/atividades/programacaoAtividades";
import TypographyOne from "../../components/atoms/typography/TypographyOne";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Programacao() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: "100%" }}>
      <Grid item xs={12} sm={6} md={4} padding={2}>
        <TypographyOne>Programação</TypographyOne>
      </Grid>

      <Grid container item xs={12} sm={8} md={8} laspacing={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary  tabs example"
          textColor="blue"
          indicatorColor="blue"
          sx={{ color: "blue", padding: "6px 15px " }}
        >
          <Tab label="Atividades" sx={{ fontSize: "14px" }} {...a11yProps(0)} />
          <Tab label="Convidados" sx={{ fontSize: "14px" }} {...a11yProps(1)} />
          <Tab label="Locais" sx={{ fontSize: "14px" }} {...a11yProps(2)} />
          <Tab
            label="Cupons de desconto"
            sx={{ fontSize: "14px" }}
            {...a11yProps(3)}
          />
          <Tab
            label="Configurações"
            sx={{ fontSize: "14px" }}
            {...a11yProps(4)}
          />
        </Tabs>
      </Grid>
      
      <TabPanel value={value} index={0}>
        <ProgramacaoAtividade />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        Área de transmissão
      </TabPanel>
      <TabPanel value={value} index={3}>
        Área de transmissão
      </TabPanel>
      <TabPanel value={value} index={4}>
        Configurações
      </TabPanel>
    </Box>
  );
}
