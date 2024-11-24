import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Avatar,
  createTheme
} from "@mui/material";
import {
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Star,
} from "@mui/icons-material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ActivityChart from "../Components/ChartsFlow";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ProgressBar from "../Components/ProgressBar";
import TableComponent from "./Orders";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


const ordersDetails = [
  { title: "Total Orders", count: 75, profit: true, profitCount: 3, iconColor: "primary", iconBgColor: "#273266" },
  { title: "Total Delivered", count: "70", profit: false, profitCount: 3, iconColor: "#00c78b", iconBgColor: "#145245" },
  { title: "Total Cancelled", count: "05", profit: true, profitCount: 3, iconColor: "#f05d5d", iconBgColor: "#5e3237" },
  { title: "Total Revenue", count: "$12k", profit: false, profitCount: 3, iconColor: "#5c2a4a", iconBgColor: "#ed58a5" },
];

const goalsDetails = [
  { title:"Goals", icon:<MyLocationIcon/>, iconColor:"#b56e51", iconBgColor:"#5c323b" },
  { title:"Popular Dishes", icon:<LunchDiningIcon/>, iconColor:"#b56e51", iconBgColor:"#263473" },
  { title:"Menus", icon:<MenuBookIcon/>, iconColor:"#b56e51", iconBgColor:"#204a61" }
];

const feedbacks = [
  { name: "Jenny Wilson", feedback: "The food was excellent and so was the service.", rating: 4, avatar: <AccountCircleIcon /> },
  { name: "Dianne Russell", feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.", rating: 5, avatar: <AccountCircleIcon /> },
  { name: "Devon Lane", feedback: "Great experience overall!", rating: 5, avatar: <AccountCircleIcon /> },
];

const Dashboard = () => {
  return (
    <Box theme={theme} sx={{minHeight: "100vh",maxWidth:'90% ',mx:2, backgroundColor: "", color: "#fff"}}>
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={2}>
          <Grid  container pl={4} >
            <Typography textAlign={"left"} variant="h4" gutterBottom>
              Dashboard   
            </Typography>
          </Grid>
          <Grid item xs={9} sm={12} md={10} lg={8}>
            <Grid container spacing={2}>
              {ordersDetails.map((item, index) => (
                <Grid item xs={10} sm={10} md={12} lg={3} key={index}>
                  <Box component={Paper} sx={{width:{xs:'72%',sm:'60%',md:'98%',lg:'99%'}, padding: "15px", borderRadius: "15px", textAlign: "left", height: "160px" }}>
                    <Box sx={{ backgroundColor: item.iconBgColor, width: 35, height: 35, borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 1 }}>
                      <AssignmentTurnedInIcon sx={{ color: item.iconColor }} />
                    </Box>
                    <Typography variant="body2">{item.title}</Typography>
                    <Box display="flex" mt={4} justifyContent="space-between" alignItems="center">
                      <Typography variant="h4" fontWeight="700">{item.count}</Typography>
                      <Box display="flex" alignItems="center">
                        {item.profit ? <ArrowDropUpIcon sx={{ color: "#08c28d" }} /> : <ArrowDropDownIcon sx={{ color: "#b84b49" }} />}
                        <Typography variant="body2" sx={{ color: item.profit ? "#08c28d" : "#b84b49" }}>
                          {item.profitCount}%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12} sx={{ display: { md: 'block', lg: 'none' } }}>
                <Box component = {Paper} sx={{width:{xs:'60%',sm:'60%',md:'98%',lg:'99%'}, padding: "15px", borderRadius: "15px", textAlign: "left", height: "160px" }}>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                      <Typography variant="body2">Net Profit</Typography>
                      <Typography mt={2} variant="h4" fontWeight="700">$6759.25</Typography>
                      <Box display="flex" alignItems="center">
                        <ArrowDropUpIcon sx={{ color: "#08c28d" }} />
                        <Typography variant="body2" sx={{ color: "#08c28d" }}>3%</Typography>
                      </Box>
                    </Box>
                    <Box>
                        <ProgressBar/>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box component = {Paper} sx={{width:{xs:'60%',sm:'60%',md:'98%',lg:'99%'},  borderRadius: "15px" }}>
                  <ActivityChart />
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ display: { md: 'block', lg: 'none' } }}>
                <Box component = {Paper} sx={{width:{xs:'60%',sm:'60%',md:'98%',lg:'99%'},  borderRadius: "15px", padding: 3, height: "300px" }}>
                  <Typography variant="h6" gutterBottom>Goals</Typography>
                  {goalsDetails.map((goal, index) => (
                    <Box display={'flex'} mb={2} justifyContent={'space-between'} gap={2} key={index}>
                      <Box display={'flex'}>
                        <Box borderRadius={'50%'} display={'flex'} width={35} p={.7} height={35} backgroundColor={goal.iconBgColor}>
                          <Typography color={goal.iconColor}>{goal.icon}</Typography>
                        </Box>
                        <Typography ml={4}> {goal.title} </Typography>
                      </Box>
                      <Box backgroundColor={"#4d4e54"} height={30} p={.3} width={30} borderRadius={"50%"}>
                        <KeyboardArrowRightIcon />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box  component={Paper} sx={{width:{xs:'60%',sm:'60%',md:'98%',lg:'99%'},height:"400px", borderRadius: "15px", padding: 3 }}>
                  <Typography textAlign={'left'} variant="h6" gutterBottom>
                    Recent Orders
                  </Typography>
                  <TableComponent/>
                </Box>
              </Grid>
            </Grid>
 
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ display: {xs:"none",sm:'none', md: 'none', lg: 'block' } }}>
                <Box component = {Paper} sx={{width:{xs:'60%',sm:'60%',md:'98%',lg:'99%'},  padding: "15px", borderRadius: "15px", textAlign: "left", height: "160px" }}>
                  <Box display={'flex'}>
                    <Box>
                      <Typography variant="body2">Net Profit</Typography>
                      <Typography mt={2} variant="h4" fontWeight="700">$6759.25</Typography>
                      <Box display="flex" alignItems="center">
                        <ArrowDropUpIcon sx={{ color: "#08c28d" }} />
                        <Typography variant="body2" sx={{ color: "#08c28d" }}>3%</Typography>
                      </Box>
                    </Box>
                    <Box>
                        <ProgressBar/>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ display: {xs:"none",sm:'none', md: 'none', lg: 'block' } }}>
                <Box component = {Paper} sx={{width:{xs:'60%',sm:'60%',md:'98%',lg:'99%'}, borderRadius: "15px", padding: 3, height: "300px" }}>
                  <Typography variant="h6" gutterBottom>Goals</Typography>
                  {goalsDetails.map((goal, index) => (
                    <Box display={'flex'} mb={2} justifyContent={'space-between'} gap={2} key={index}>
                      <Box display={'flex'}>
                        <Box borderRadius={'50%'} display={'flex'} width={35} p={.7} height={35} backgroundColor={goal.iconBgColor}>
                          <Typography color={goal.iconColor}>{goal.icon}</Typography>
                        </Box>
                        <Typography ml={4}> {goal.title} </Typography>
                      </Box>
                      <Box backgroundColor={"#4d4e54"} height={30} p={.3} width={30} borderRadius={"50%"}>
                        <KeyboardArrowRightIcon />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box component = {Paper} sx={{width:{xs:'45%',sm:'60%',md:'98%',lg:'99%'},height:"400px",overflowY:"scroll", borderRadius: "15px", padding: 3 }}>
                  <Typography variant="h6" textAlign={'left'} gutterBottom>Customer's Feedback</Typography>
                    <List>
                      {feedbacks.map((feedback, index) => (
                        <ListItem key={index} divider>
                          <Box>
                            <Box display={'flex'} alignItems={'center'}>
                              <Avatar sx={{ mr: 2 }}>{feedback.avatar}</Avatar>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {feedback.name}
                              </Typography>
                            </Box>
                            <Rating sx={{mt:2}} value={feedback.rating} readOnly size="small" />
                            <Typography variant="body2" mt={1}>
                              {feedback.feedback}
                            </Typography>
                          </Box>
                        </ListItem>
                      ))}
                    </List>   
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
