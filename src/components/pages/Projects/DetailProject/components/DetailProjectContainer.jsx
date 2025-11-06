import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const DetailProjectContainer = () => {
  return (
    <SidebarLayout
      pageTitle="Project Abcdefg"
      breadcrumbs={[
        {
          label: 'Projects',
          href: '/projects',
        },
        {
          label: 'Detail Projects',
        },
      ]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan projects abcdefg di sini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default DetailProjectContainer;
