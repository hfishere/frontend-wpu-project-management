import { useLoaderData } from 'react-router';

import useDetailProjectContext from '../hooks/useDetailProjectContext';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const DetailProjectContainer = () => {
  const detailProjectData = useLoaderData();
  const detailProjectContext = useDetailProjectContext();

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
    />
  );
};

export default DetailProjectContainer;
