import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  adminApprovesRequest,
  donorApprovesRequest,
  fetchAdminRequests, 
  fetchDonorRequests 
} from '../../Redux/actions';


export default function ApproveButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userID, isDonor, isAdmin } = useSelector((state) => state.loginState.user);
  const handleApproveRequest = () => {
    const data = props;
    const { id } = data;
    
      if (isAdmin) {
        dispatch(adminApprovesRequest(id));
        dispatch(fetchAdminRequests())
      }
      if (isDonor) {
        dispatch(donorApprovesRequest(id));
        dispatch(fetchDonorRequests(userID))
        setTimeout(() => {
          navigate('/checkout');
        }, 1000);
      }
  
  };
  return (
    <Button variant="text" onClick={handleApproveRequest}>
      Approve
    </Button>
  );
}
