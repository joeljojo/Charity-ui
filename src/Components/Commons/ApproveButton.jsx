import * as React from 'react';
import Button from '@mui/material/Button';

export default function ApproveButton() {
  const handleApproveRequest = () => {
    alert('Clicked Approve Request');
  };
  return (
    <Button variant="text" onClick={handleApproveRequest}>
      Approve
    </Button>
  );
}
