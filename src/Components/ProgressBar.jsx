import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={80}
        thickness={5}
        sx={{
          color: "#4A90E2", // Adjust the color as per your design
          backgroundColor: "transparent",
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h6"
          component="div"
         
          fontWeight="bold"
        >
          {`${Math.round(value)}%`}
        </Typography>
        <Typography         
        variant="caption"
          component="div"
          sx={{ color: 'text.secondary', fontSize:"7px",lineHeight:"10px" }}>
          Goal<br/> Completed
        </Typography>
      </Box>
    </Box>
  );
};

const ProgressBar = () => {
  return (
      <Box textAlign="center">
        <CircularProgressWithLabel value={70} />
        <Typography
          variant="caption"
          component="div"
        >
          *The values here have been rounded off.
        </Typography>
      </Box>
  );
};

export default ProgressBar;
