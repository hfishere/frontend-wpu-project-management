import { Settings } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Dropdown from '../../../ui/Dropdown';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Dropdown
        icon={<Settings />}
        options={[
          {
            label: 'Tutup proyek ini',
            onClick() {
              console.log('handle close project');
            },
          },
          {
            label: 'Ubah deadline',
            onClick() {
              console.log('handle ubah deadline');
            },
          },
        ]}
      />
    </Stack>
  );
};

export default DetailProject;
