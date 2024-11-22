import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import GridViewIcon from '@mui/icons-material/GridView';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { PageContainer } from '@toolpad/core/PageContainer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import Grid from '@mui/material/Grid2';
import { DemoPageContent } from './DashBoardRoutes';
import { ToolbarActionsSearch } from './Container/SearchBar';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    segment: 'analytics',
    title: 'Analytics',
    icon: <InsertChartIcon />,
  },
  {
    segment: 'activities',
    title: 'Activities',
    icon: <AssignmentTurnedInIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'cart',
    title: 'Cart',
    icon: <LocalMallIcon />,
  },

];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? <ExitToAppIcon/> : `Exit`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};


export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <GridViewIcon fontSize='large' sx={{mt:0.5}}/>,
        title: '',
      }}
    >
        <DashboardLayout
          slots={{
            toolbarActions: ToolbarActionsSearch,
            sidebarFooter: SidebarFooter,
          }}
        >  
            <DemoPageContent pathname={router.pathname} navigate={router.navigate} />
        {/* <PageContainer>
          <Grid container spacing={1}>
          </Grid>
        </PageContainer> */}
      </DashboardLayout>
    </AppProvider>
  );
}
