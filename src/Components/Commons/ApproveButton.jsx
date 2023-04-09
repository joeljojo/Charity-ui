import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  adminApprovesRequest,
  donorApprovesRequest,
} from '../../Redux/actions';

export default function ApproveButton(props) {
  const dispatch = useDispatch();
  const { isDonor, isAdmin } = useSelector((state) => state.loginState.user);
  const handleApproveRequest = () => {
    const data = props;
    const { id } = data;
    React.useEffect(() => {
      if (isAdmin) {
        dispatch(adminApprovesRequest(id));
      }
      if (isDonor) {
        dispatch(donorApprovesRequest(id));
      }
    }, []);
  };
  return (
    <Button variant="text" onClick={handleApproveRequest}>
      Approve
    </Button>
  );
}
