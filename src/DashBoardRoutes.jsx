import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dashboard from './Container/Dashboard';


export function DemoPageContent({ pathname, navigate }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography>
        {pathname == '/dashboard' ? <Dashboard/>
            :
        <p>Dashboard content for {pathname}</p>
         } 
      </Typography>
      {pathname.startsWith('/orders') ? (
        <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
          <Button
            onClick={() => {
              navigate('/orders/1');
            }}
          >
            Order 1
          </Button>
          <Button
            onClick={() => {
              navigate('/orders/2');
            }}
          >
            Order 2
          </Button>
          <Button
            onClick={() => {
              navigate('/orders/3');
            }}
          >
            Order 3
          </Button>
        </Stack>
      ) : null}
    </Box>
  );
}

DemoPageContent.propTypes = {
  navigate: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};