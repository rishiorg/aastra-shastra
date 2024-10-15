// src/components/UserCard.js
import React from 'react';
import { Avatar, Card, CardHeader } from '@mui/material';

const UserCard = ({ title, status, timeAgo, active }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar>{title.charAt(0)}</Avatar>}
        title={title}
        subheader={active ? "ACTIVE" : timeAgo}
        subheaderTypographyProps={{ style: { color: active ? '#28A745' : '#777' } }}
      />
    </Card>
  );
};

export default UserCard;