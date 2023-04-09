import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';

export default function ApproveButton(props) {
  const dispatch = useDispatch();
  const { isDonor, isAdmin } = useSelector((state) => state.loginState.user);
  const handleApproveRequest = () => {
    const data = props;
    const { id } = data;
    if (isAdmin) {
      dispatch();
    }
    if (isDonor) {
      dispatch();
    }
  };
  return (
    <Button variant="text" onClick={handleApproveRequest}>
      Approve
    </Button>
  );
}
