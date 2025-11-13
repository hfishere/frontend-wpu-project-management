import { AddCircle } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';

import useCreateNewTask from '../hooks/useCreateNewTask';

import TextField from '@/components/ui/Forms/TextField';

const CreateNewTask = ({ listId }) => {
  const {
    isLoading,
    isShowFormCreateNewTask,
    control,
    handleSubmit,

    handleOpenFormCreateNewTask,
    handleCloseFormCreateNewTask,
    onSubmit,
  } = useCreateNewTask({ listId });

  if (isShowFormCreateNewTask) {
    return (
      <Box p={1} component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          control={control}
          name={'title'}
          label={'Nama tugas'}
          fullWidth
        />
        <Stack direction={'row'} gap={1} justifyContent={'flex-end'}>
          <Button
            type="submit"
            variant="contained"
            size="small"
            disabled={isLoading}
            loading={isLoading}
          >
            Simpan
          </Button>
          <Button
            type="button"
            variant="outlined"
            size="small"
            onClick={handleCloseFormCreateNewTask}
            disabled={isLoading}
          >
            Batal
          </Button>
        </Stack>
      </Box>
    );
  }
  return (
    <Button
      type="button"
      variant="text"
      fullWidth
      startIcon={<AddCircle />}
      onClick={handleOpenFormCreateNewTask}
    >
      Buat tugas baru
    </Button>
  );
};

export default CreateNewTask;
