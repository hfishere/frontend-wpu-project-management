import { Box, Button, Link } from '@mui/material';
import { useEffect, useState } from 'react';

import SidebarLayout from '@/components/layouts/SidebarLayout';
import Table from '@/components/ui/Table';
import services from '@/services';
import datetime from '@/utils/datetime';

const Projects = () => {
  const [isLoading, setLoading] = useState(false);
  const [boardsData, setBoardsData] = useState([]);

  useEffect(() => {
    const fetchBoardsData = async () => {
      setLoading(true);
      const response = await services.boards.myBoards();
      setBoardsData(response.data.data);
      setLoading(false);
    };

    fetchBoardsData();
  }, []); // onMounted

  return (
    <SidebarLayout pageTitle="Projects">
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
