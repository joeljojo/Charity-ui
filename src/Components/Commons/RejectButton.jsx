import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  adminRejectsRequest,
  donorRejectsRequest,
  fetchAdminRequests,
  fetchDonorRequests,
} from '../../Redux/actions';

export default function RejectButton(props) {
  const dispatch = useDispatch();
  const { userID, isDonor, isAdmin } = useSelector(
    (state) => state.loginState.user
  );
  const handleRejectRequest = () => {
    const data = props;
    const { id } = data;
    if (isAdmin) {
      dispatch(adminRejectsRequest(id));
      setTimeout(() => {
        dispatch(fetchAdminRequests());
      }, 1500);
    }
    if (isDonor) {
      dispatch(donorRejectsRequest(id));
      setTimeout(() => {
        dispatch(fetchDonorRequests(userID));
      }, 1500);
    }
  };
  return (
    <Button variant="text" onClick={handleRejectRequest}>
      Reject
    </Button>
  );
}
