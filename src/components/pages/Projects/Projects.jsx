import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const Projects = () => {
  return (
    <SidebarLayout pageTitle="Projects">
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan projects di sini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Projects;
