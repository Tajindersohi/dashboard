import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography, Select, MenuItem, Paper } from "@mui/material";

const data = [
  { name: "5", value: 4000 },
  { name: "6", value: 3000 },
  { name: "7", value: 2000 },
  { name: "8", value: 2780 },
  { name: "9", value: 1890 },
  { name: "10", value: 2390 },
  { name: "11", value: 3490 },
  { name: "12", value: 4300 },
  { name: "13", value: 5400 },
  { name: "14", value: 2500 },
  { name: "15", value: 4000 },
  { name: "16", value: 3000 },
  { name: "17", value: 2000 },
  { name: "18", value: 2780 },
  { name: "19", value: 10000 },
  { name: "20", value: 11000 },
  { name: "21", value: 14000 },
  { name: "22", value: 9000 },
  { name: "23", value: 7000 },
  { name: "24", value: 8500 },
  { name: "25", value: 6000 },
  { name: "26", value: 9000 },
  { name: "27", value: 10000 },
];

const ActivityChart = () => {
  const [timeframe, setTimeframe] = React.useState("Weekly");

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <Box
    component = {Paper}
      sx={{
        borderRadius: "15px",
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Activity
        </Typography>
        <Select
          value={timeframe}
          onChange={handleTimeframeChange}
          sx={{
            backgroundColor: "#3e3e4d",
            color: "#fff",
            borderRadius: "5px",
            fontSize: "14px",
            padding: "5px 10px",
            height:'36px',
            borderRadius:"20px"
          }}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
        </Select>
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: "#3e3e4d", color: "#fff" }} />
          <Bar dataKey="value" fill="#4e9fff" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ActivityChart;
