import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(Math.floor(Math.random() * 5) + 1);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2.5, mr: 16 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          event.stopPropagation();

          setValue(newValue);
        }}
      />
    </Box>
  );
}
