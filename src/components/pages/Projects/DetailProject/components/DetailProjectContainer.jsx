import { Stack } from '@mui/material';

import CreateNewList from './CreateNewList';
import ListSortableItem from './ListSortableItem';

import SidebarLayout from '@/components/layouts/SidebarLayout';
import useDetailProjectContainer from '../hooks/useDetailProjectContainer';

const DetailProjectContainer = () => {
  const {
    boardListData,
    detailProjectData,
    detailProjectContext
  } = useDetailProjectContainer();

  return (
    <SidebarLayout
      pageTitle={`${detailProjectData.title} (${detailProjectContext.getProjectInitials})`}
      breadcrumbs={[
        {
          label: 'Projects',
          href: '/projects',
        },
        {
          label: detailProjectData.title,
        },
      ]}
    >
      <Stack
        direction={'row'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        gap={2}
        pb={5}
        sx={{
          overflowX: 'auto'
        }}
      >
        <ListSortableItem />
        {
          boardListData?.map((item) => (
            <ListSortableItem 
            key={item.public_id} 
            id={item.public_id}
            item={item}
            />
          ))
        }
        <CreateNewList />
      </Stack>
    </SidebarLayout>
  );
};

export default DetailProjectContainer;
