import { Box, Button, colors, Stack, Typography } from '@mui/material';

import useModalTaskDetail from './hooks/useModalTaskDetail';

import TextField from '@/components/ui/Forms/TextField';
import Modal from '@/components/ui/Modal';

export default function ModalTaskDetail() {
    const {
        taskId,
        handleClose,
        taskDetailData,
        editTitle,
        setEditTitle,
        formTask,
        isLoading,
        onSubmit,
    } = useModalTaskDetail();

    const renderTitle = () => {
        return (
            <Stack gap={2}>
                <Typography variant="h5" fontWeight={700}>
                    Judul
                </Typography>
                {
                    editTitle ?
                        (
                            <Box component={'form'} onSubmit={formTask.handleSubmit(onSubmit)}>
                                <TextField
                                    control={formTask.control}
                                    name={'title'}
                                    fullWidth
                                    disabled={isLoading}
                                />
                                <Stack direction={'row'} justifyContent={'flex-end'} gap={1}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={isLoading}
                                        loading={isLoading}
                                    >
                                        Simpan
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        onClick={() => setEditTitle(false)}
                                        disabled={isLoading}
                                    >
                                        Batal
                                    </Button>
                                </Stack>
                            </Box>
                        ) : (
                            <Typography
                                component={'a'}
                                variant="body2"
                                sx={{
                                    display: 'block',
                                    ':hover': {
                                        background: colors.grey[100],
                                        cursor: 'pointer',
                                        p: 1,
                                        borderRadius: 1,
                                    },
                                }}
                                onClick={() => setEditTitle(true)}
                            >
                                {taskDetailData.title || 'Belum ada judul, klik untuk menambahkan'}
                            </Typography>

                        )
                }
            </Stack>
        );
    };

    return (
        <Modal
            open={taskId}
            handleClose={handleClose}
            title={taskDetailData?.title || ''}
        >
            <Stack
                direction={'row'}
                gap={2}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={{
                    width: 1000,
                    height: 600,
                    overflowY: 'auto',
                    p: 2,
                }}
            >
                <Stack width={'65%'} gap={2}>
                    {renderTitle()}
                </Stack>
            </Stack>
        </Modal>
    );
}
