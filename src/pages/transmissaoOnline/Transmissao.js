import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import Evento from "../../components/organismos/Eventos/Evento";
import TypographyOne from "../../components/atoms/typography/TypographyOne"

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

export default function Transmissao() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <TypographyOne>Transmissão online</TypographyOne>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary  tabs example"
          textColor="blue"
          indicatorColor="blue"
          sx={{ color: "blue", padding: "6px 15px " }}
        >
          <Tab label="Evento" sx={{ fontSize: "14px" }} {...a11yProps(0)} />
          <Tab label="Atividades" sx={{ fontSize: "14px" }} {...a11yProps(1)} />
          <Tab
            label="Área de transmissão"
            sx={{ fontSize: "14px" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Evento />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Atividades
      </TabPanel>
      <TabPanel value={value} index={2}>
        Área de transmissão
      </TabPanel>
    </Box>
  );
}
