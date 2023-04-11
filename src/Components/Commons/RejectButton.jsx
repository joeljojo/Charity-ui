import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { adminRejectsRequest, donorRejectsRequest } from '../../Redux/actions';

export default function RejectButton(props) {
  const dispatch = useDispatch();
  const { isDonor, isAdmin } = useSelector((state) => state.loginState.user);
  const handleRejectRequest = () => {
    const data = props;
    const { id } = data;
          if (isAdmin) {
        dispatch(adminRejectsRequest(id));
      }
      if (isDonor) {
        dispatch(donorRejectsRequest(id));
      }

  };
  return (
    <Button variant="text" onClick={handleRejectRequest}>
      Reject
    </Button>
  );
}
