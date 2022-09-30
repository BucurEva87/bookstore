const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default (status, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return status;
  }
};
