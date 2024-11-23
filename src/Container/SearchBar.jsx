import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function ToolbarActionsSearch() {
    return (
      <Stack direction="row" gap={2} mt={2}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <IconButton type="button" aria-label="search" size="small">
                  <SearchIcon />
                </IconButton>
              ),
              sx: { pr: 0.5 },
            },
          }}
          sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
        />
        <MailIcon sx={{mt:"8px", cursor:"pointer"}}/>
        <SettingsIcon sx={{mt:"8px", cursor:"pointer"}}/>
        <Badge color="secondary" sx={{mt:"8px", cursor:"pointer"}} variant="dot">
          <NotificationsIcon />
        </Badge>
        <AccountCircleIcon sx={{mt:"8px", cursor:"pointer"}}/>
        <ThemeSwitcher />
      </Stack>
    );
  }