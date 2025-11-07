import { useContext } from 'react';

import { DetailProjectContext } from '../DetailProjectContextObject';

const useDetailProjectContext = () => {
  const detailProject = useContext(DetailProjectContext);

  return detailProject;
};

export default useDetailProjectContext;
