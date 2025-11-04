import { Settings as SettingIcon } from '@mui/icons-material';
import { Box, colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const Settings = () => {
  return (
    <SidebarLayout pageTitle="Settings">
      <Paper
        sx={{
          padding: 2,
          background: colors.lightGreen[100],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <SettingIcon />
          <Typography>Menampilkan settings disini</Typography>
        </Box>
      </Paper>
    </SidebarLayout>
  );
};

export default Settings;
