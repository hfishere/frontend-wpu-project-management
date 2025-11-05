import { Box, Button, Link, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

import SidebarLayout from '@/components/layouts/SidebarLayout';
import Table from '@/components/ui/Table';
import services from '@/services';
import datetime from '@/utils/datetime';
import TextField from '@/components/ui/Forms/TextField';
import { useForm, useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce'

const Projects = () => {
  const [isLoading, setLoading] = useState(false);
  const [boardsData, setBoardsData] = useState([]);

  const { control } = useForm({
    defaultValues: {
      search: ''
    }
  });

  const watchSearch = useWatch({
    control,
    name: 'search'
  });

  const [debounceSearch] = useDebounce(watchSearch, 1000);

  useEffect(() => {
    const fetchBoardsData = async () => {
      setLoading(true);
      const response = await services.boards.myBoards({
        filter: debounceSearch
      });
      setBoardsData(response.data.data);
      setLoading(false);
    };

    fetchBoardsData();
  }, [debounceSearch]); // onMounted

  return (
    <SidebarLayout
      pageTitle="Projects"
      breadcrumbs={[
        {
          label: 'Daftar Proyek'
        }
      ]}
    >
      <Stack>
        <Box>
          <TextField
            control={control}
            label={'Cari nama proyek'}
            id="search"
            name={"search"}
            size="small"
          />
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
              return <Box>{datetime.format(data.created_at, "DD/MM/YYYY")}</Box>;
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
    </SidebarLayout>
  );
};

export default Projects;
