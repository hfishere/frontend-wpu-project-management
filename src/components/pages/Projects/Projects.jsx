import { Box, Button, Link, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import ModalAddNewProject from './Modals/ModalAddNewProject';

import SidebarLayout from '@/components/layouts/SidebarLayout';
import TextField from '@/components/ui/Forms/TextField';
import Pagination from '@/components/ui/Pagination';
import Table from '@/components/ui/Table';
import services from '@/services';
import datetime from '@/utils/datetime';

const Projects = () => {
  const [isLoading, setLoading] = useState(false);
  const [boardsData, setBoardsData] = useState([]);
  const [boardsMeta, setBoardsMeta] = useState({});
  const [page, setPage] = useState(1);

  const [openModalAddNewProject, setOpenModalAddNewProject] = useState(false);

  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const watchSearch = useWatch({
    control,
    name: 'search',
  });

  const [debounceSearch] = useDebounce(watchSearch, 1000);

  const handleOpenModalAddNewProject = () => setOpenModalAddNewProject(true);
  const handleCloseModalAddNewProject = () => setOpenModalAddNewProject(false);

  useEffect(() => {
    const fetchBoardsData = async () => {
      setLoading(true);
      const response = await services.boards.myBoards({
        filter: debounceSearch,
        limit: 10,
        page: page,
      });
      setBoardsData(response.data.data);
      setBoardsMeta(response.data.meta);
      setLoading(false);
    };

    fetchBoardsData();
  }, [debounceSearch, page]); // onMounted

  return (
    <>
      <SidebarLayout
        pageTitle="Projects"
        breadcrumbs={[
          {
            label: 'Daftar Proyek',
          },
        ]}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <TextField
              control={control}
              label={'Cari nama proyek'}
              id="search"
              name={'search'}
              size="small"
            />
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              onClick={handleOpenModalAddNewProject}
            >
              Buat proyek baru
            </Button>
          </Box>
        </Stack>
        <Table
          isLoading={isLoading}
          data={boardsData}
          columns={[
            {
              id: 'title',
              label: 'Nama proyek',
            },
            {
              id: 'description',
              label: 'Deskripsi',
            },
            {
              id: 'date',
              label: 'Tanggal dibuat',
              render(data) {
                return (
                  <Box>{datetime.format(data.created_at, 'DD/MM/YYYY')}</Box>
                );
              },
            },
            {
              id: 'action',
              label: 'Aksi',
              render(data) {
                return (
                  <Link to={`/projects/${data.public_id}`}>
                    <Button key={'action'} type="button" variant="outlined">
                      Detail proyek
                    </Button>
                  </Link>
                );
              },
            },
          ]}
        />
        <Pagination
          count={boardsMeta.total_page}
          onChange={(event, page) => {
            setPage(page);
          }}
        />
      </SidebarLayout>
      <ModalAddNewProject
        open={openModalAddNewProject}
        handleClose={handleCloseModalAddNewProject}
      />
    </>
  );
};

export default Projects;
