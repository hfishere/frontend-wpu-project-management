import { Delete } from "@mui/icons-material";
import { Box, colors, IconButton, Stack, Typography } from "@mui/material";

const ListSortableItem = ({id, item}) => {
    const renderDeleteList = () => {
        return (
            <IconButton size="small" color="error" onClick={() => { }}>
                <Delete />
            </IconButton>
        )
    };
    return (
        <Box
            sx={{
                flexBasis: 300,
                flexShrink: 0,
                overflowX: 'hidden',
                borderRadius: 1,
                px: 0.5,
                mx: -0.5,
                background: colors.grey[50]
            }}
        >
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                p={2}
                borderBottom={`1px solid ${colors.grey[300]}`}
                sx={{
                    cursor: 'grab',
                    borderTopRightRadius: 1,
                    borderTopLeftRadius: 1
                }}
            >
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Typography variant="body1" fontWeight={600}>
                        Judul List
                    </Typography>
                </Stack>
                <Stack justifyContent={'center'} alignItems={'center'} sx={{
                    width: 26,
                    height: 26,
                    borderRadius: 1,
                    backgroundColor: colors.orange[100]
                }}>
                    <Typography variant="caption" fontWeight={600}>
                        10
                    </Typography>
                </Stack>
                {renderDeleteList()}
            </Stack>
        </Box>
    )
}

export default ListSortableItem;