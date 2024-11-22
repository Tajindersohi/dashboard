import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
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

const ordersDetails = [
  {
    title: "Total Orders",
    count: 75,
    profit: true,
    profitCount: 3,
    iconColor: "primary",
    iconBgColor: "#273266",
  },
  {
    title: "Total Delivered",
    count: "70",
    profit: false,
    profitCount: 3,
    iconColor: "#00c78b",
    iconBgColor: "#145245",
  },
  {
    title: "Total Cancelled",
    count: "05",
    profit: true,
    profitCount: 3,
    iconColor: "#f05d5d",
    iconBgColor: "#5e3237",
  },
  {
    title: "Total Revenue",
    count: "$12k",
    profit: false,
    profitCount: 3,
    iconColor: "#5c2a4a",
    iconBgColor: "#ed58a5",
  },
];

const goalsDetails = [
    {
        title:"Goals",
        icon:<MyLocationIcon/>,
        iconColor:"#b56e51",
        iconBgColor:"#5c323b"
    },
    {
        title:"Popular Dishes",
        icon:<MyLocationIcon/>,
        iconColor:"#b56e51",
        iconBgColor:"#263473"
    },
    {
        title:"Menus",
        icon:<MyLocationIcon/>,
        iconColor:"#b56e51",
        iconBgColor:"#204a61"
    },
]

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "",
        color: "#fff",
        padding: 3,
      }}
    >
      <Box sx={{ flex: 1 }}>


        <Grid container spacing={2}>
            <Grid container  pl={4} xs={12} md={12}>
                <Typography textAlign={"left"} variant="h4" gutterBottom>
                    Dashboard   
                </Typography>
            </Grid>
          <Grid item xs={1} md={7.5}>
            <Grid container spacing={2}>
              {ordersDetails.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#202021",
                      padding: "15px",
                      borderRadius: "15px",
                      textAlign: "left",
                      height: "150px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: item.iconBgColor,
                        width: 35,
                        height: 35,
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 1,
                      }}
                    >
                      <AssignmentTurnedInIcon sx={{ color: item.iconColor }} />
                    </Box>
                    <Typography variant="body2">{item.title}</Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mt={1}
                    >
                      <Typography variant="h4" fontWeight="700">
                        {item.count}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        {item.profit ? (
                          <ArrowDropUpIcon sx={{ color: "#08c28d" }} />
                        ) : (
                          <ArrowDropDownIcon sx={{ color: "#b84b49" }} />
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            color: item.profit ? "#08c28d" : "#b84b49",
                          }}
                        >
                          {item.profitCount}%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            <Grid item xs={12} md={12}>
                <Box
                sx={{
                    backgroundColor: "#202021",
                    borderRadius: "15px",
                }}
                >
                <ActivityChart/>
                </Box>
            </Grid>   
            <Grid item xs={12} md={12}>
                <Box
                sx={{
                    backgroundColor: "#202021",
                    borderRadius: "15px",
                    padding: 3,
                }}
                >
                <Typography variant="h6" gutterBottom>
                    Customer Details
                </Typography>
                <List>
                    {[
                    { name: "John Doe", order: "Order #1234" },
                    { name: "Jane Smith", order: "Order #5678" },
                    ].map((customer, index) => (
                    <ListItem key={index} divider>
                        <ListItemText
                        primary={customer.name}
                        secondary={customer.order}
                        />
                    </ListItem>
                    ))}
                </List>
                </Box>
            </Grid>

            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box
                        sx={{
                        backgroundColor: "#202021",
                        padding: "15px",
                        borderRadius: "15px",
                        textAlign: "left",
                        height: "150px",
                        }}
                    > 
                    <Typography variant="h6" gutterBottom>
                        Net Profit
                    </Typography>
                    <Typography variant="h4">$6759.25</Typography>
                    <Typography variant="subtitle2" color="success.main">
                        +3%
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box
                    sx={{
                        backgroundColor: "#202021",
                        borderRadius: "15px",
                        padding: 3,
                        height:"300px"
                    }}
                    >
                    <Typography variant="h6" gutterBottom>
                        Goals
                    </Typography>
                        {goalsDetails.map((goal, index) => (
                        <Box display={'flex'} mb={2} justifyContent={'space-between'} gap={2}>
                            <Box display={'flex'}>
                                <Box 
                                    borderRadius={'50%'}
                                    display={'flex'}
                                    width={35}
                                    p={.7}
                                    height={35}
                                    backgroundColor={goal.iconBgColor}
                                >
                                <Typography color={goal.iconColor}>{goal.icon}</Typography>
                                </Box>
                                <Typography ml={4}> {goal.title} </Typography>
                            </Box>
                            <Box backgroundColor={"#4d4e54"} height={30} p={.3} width={30} borderRadius={"50%"}>
                                <KeyboardArrowRightIcon/>
                            </Box>
                        </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box
                    sx={{
                        backgroundColor: "#202021",
                        borderRadius: "15px",
                        padding: 3,
                    }}
                    >
                    <Typography variant="h6" gutterBottom>
                        Customer Reviews
                    </Typography>
                    <List>
                        {[
                        {
                            name: "Jenny Wilson",
                            feedback: "Excellent service and quality!",
                        },
                        { name: "Devon Lane", feedback: "Great experience overall!" },
                        ].map((review, index) => (
                        <ListItem key={index} divider>
                            <ListItemText
                            primary={review.name}
                            secondary={review.feedback}
                            />
                            <Star sx={{ color: "gold" }} />
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
