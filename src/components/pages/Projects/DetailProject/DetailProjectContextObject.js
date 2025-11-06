import { createContext } from 'react';

const defaultState = {
  activeDragItem: null,
  setActiveDragItem() {},
  updateTaskItemPosition: {},
  setUpdateTaskItemPosition() {},
  overDragItem: null,
  setOverDragItem() {},
  isLoadingBoardLists: false,
  boardListData: [],
  getTaskItemsByListId() {},
  async fetchBoardLists() {},
  isOver: false,
  setIsOver() {},
  getProjectInitials() {},
  isOpenTaskDetail: false,
  setIsOpenTaskDetail() {},
  taskDetail: {},
  setTaskDetail() {},
  isOpenModalAddNewMember: false,
  setIsOpenModalAddNewMember() {},
  members: [],
  setMembers() {},
  isOpenModalEditProject: false,
  setIsOpenModalEditProject() {},
  activeOverItem: null,
  setActiveOverItem() {},
};

export const DetailProjectContext = createContext(defaultState);
