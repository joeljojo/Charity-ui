import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  adminApprovesRequest,
  donorApprovesRequest,
} from '../../Redux/actions';

export default function ApproveButton(props) {
  const navigate = useNavigate();
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
        setTimeout(() => {
          navigate('/checkout');
        }, 1000);
      }
    }, []);
  };
  return (
    <Button variant="text" onClick={handleApproveRequest}>
      Approve
    </Button>
  );
}
