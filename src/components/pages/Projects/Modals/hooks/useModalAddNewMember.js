import { useCallback, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import { useDebounce } from 'use-debounce';

import useDetailProjectContext from '../../DetailProject/hooks/useDetailProjectContext';

import { useSnackbar } from '@/components/ui/Snackbar';
import services from '@/services';

const useModalAddNewMember = () => {
  const detailProjectData = useLoaderData();
  const detailProjectContext = useDetailProjectContext();

  const { control, reset } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const watchEmail = useWatch({
    control,
    name: 'email',
  });

  const [isLoading, setLoading] = useState(false);
  const [isLoadingAddMember, setLoadingAddMember] = useState(false);
  const [usersData, setUsersData] = useState(null);
  const [debounceEmail] = useDebounce(watchEmail, 1000);

  const snackBar = useSnackbar();

  const fetchUserByEmail = useCallback(
    async (email) => {
      if (!email) return;

      try {
        setLoading(true);

        const response = await services.users.getUsers({
          filter: email,
          limit: 1,
          page: 1,
        });

        setUsersData(response.data.data);
      } catch (error) {
        console.error(error);
        snackBar.toggleSnackbar(true, 'Gagal mencari pengguna!');
        setUsersData(null);
      } finally {
        setLoading(false);
      }
    },
    [snackBar],
  );

  useEffect(() => {
    fetchUserByEmail(debounceEmail);
  }, [fetchUserByEmail, debounceEmail]);

  const handleClose = async () => {
    reset();
    setUsersData(null);
    detailProjectContext.setIsOpenModalAddNewMember(false);
    await detailProjectContext.fetchBoardMembers();
  };

  const handleAddMember = async () => {
    try {
      setLoadingAddMember(true);
      const userIds = usersData.map((item) => item.public_id);
      await services.boards.addMember(detailProjectData.public_id, userIds);
      snackBar.toggleSnackbar(true, 'Berhasil menambahkan member baru!');
    } catch (error) {
      console.error(error);
      snackBar.toggleSnackbar(true, 'Gagal menambahkan member baru!');
    } finally {
      detailProjectContext.setIsOpenModalAddNewMember(false);
      setLoadingAddMember(false);
      await detailProjectContext.fetchBoardMembers();
    }
  };

  return {
    control,
    isLoading,
    isLoadingAddMember,
    handleAddMember,
    handleClose,
    detailProjectContext,
    detailProjectData,
    usersData,
    debounceEmail,
    setUsersData,
  };
};

export default useModalAddNewMember;
