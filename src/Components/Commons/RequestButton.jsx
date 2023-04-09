import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function RequestButton(props) {
  const navigate = useNavigate();
  const handleMakeRequest = () => {
    const data = props;
    navigate('/make-request', { state: { data } });
  };
  return (
    <Button variant="text" onClick={handleMakeRequest}>
      Make Request
    </Button>
  );
}
