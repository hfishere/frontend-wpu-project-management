import { Paper, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

import DatePicker from '../../../ui/Forms/DatePicker';
import Select from '../../../ui/Forms/Select';
import TextField from '../../../ui/Forms/TextField';

const Login = () => {
  const { control, watch } = useForm({
    defaultValues: {
      filterDate: dayjs(),
      category: '1',
    },
  });

  const username = watch('username');
  const category = watch('category');
  const filterDate = watch('filterDate');

  console.log(username);
  console.log(category);
  console.log(filterDate);

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Paper
        sx={{
          width: 600,
          padding: 2,
        }}
      >
        <DatePicker name="filterDate" control={control} label="Pilih Tanggal" />
        <TextField name={'username'} control={control} label={'Username'} />
        <Select
          name={'category'}
          control={control}
          label={'Pilih kategori'}
          options={[
            {
              value: '1',
              label: 'Kategori 1',
            },
            {
              value: '2',
              label: 'Kategori 2',
            },
            {
              value: '3',
              label: 'Kategori 3',
            },
          ]}
        />
      </Paper>
    </Stack>
  );
};

export default Login;
