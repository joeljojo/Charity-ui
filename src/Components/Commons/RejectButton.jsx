import * as React from 'react';
import Button from '@mui/material/Button';

export default function RejectButton(props) {
  const handleRejectRequest = () => {
    const data = props;
    const { id } = data;
    console.log(id);
    alert(`Clicked Reject Request${id}`);
  };
  return (
    <Button variant="text" onClick={handleRejectRequest}>
      Reject
    </Button>
  );
}
