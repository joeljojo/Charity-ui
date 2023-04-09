import * as React from 'react';
import Button from '@mui/material/Button';

export default function RejectButton() {
  const handleRejectRequest = () => {
    alert('Clicked Reject Request');
  };
  return (
    <Button variant="text" onClick={handleRejectRequest}>
      Reject
    </Button>
  );
}
