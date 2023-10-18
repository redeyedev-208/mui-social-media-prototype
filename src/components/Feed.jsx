import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Feed = () => {
  return (
    <Box
      color='white'
      flex={4}
      p={2}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
