import "./tab.css";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function BasicTabs({ setFood, food }) {
  const handleChange = (event, newValues) => {
    setFood(newValues);
  };

  return (
    <Box sx={{ width: "100%", m: 0.2 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "#ED1940",
        }}
      >
        <Tabs
          value={food}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="All" value="All" />
          <Tab label="Burger" value="Burger" />
          <Tab label="Pizza" value="Pizza" />
          <Tab label="Drink" value="Drink" />
        </Tabs>
      </Box>
    </Box>
  );
}
